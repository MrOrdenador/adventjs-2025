# import these modules if you need them:
from datetime import datetime, timezone
# import math
      
def time_until_take_off(from_time: str, take_off_time: str) -> int:
  def converter(elftime):
    elftime = elftime[:-3]

    [y, m, extra] =  elftime.split("*")
    [d, extratime] = extra.split("@")
    [hh, mm, ss] = extratime.split("|")

    return datetime(
        int(y),
        int(m),
        int(d),
        int(hh),
        int(mm),
        int(ss),
        tzinfo=timezone.utc
    )
  
  return int((converter(take_off_time) - converter(from_time)).total_seconds())
