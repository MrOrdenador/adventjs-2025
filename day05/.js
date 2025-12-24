/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  function converter(elftime){
    let time = elftime.slice(0, -3)

    let [y, m, extra] = time.split("*")
    let [d, extratime] = extra.split("@")
    let [hh, mm, ss] = extratime.split("|")

    return new Date(
      Date.UTC(
        Number(y),
        Number(m) - 1,
        Number(d),
        Number(hh),
        Number(mm),
        Number(ss),
      )
    )
  }
  return (Math.floor((converter(takeOffTime) - converter(fromTime)) / 1000))
}