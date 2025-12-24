type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  function converter(elftime:ElfDateTime){
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