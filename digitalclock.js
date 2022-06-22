clockUpdate = () => {
  var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var a = new Date();

  //date
  var dayname = days[a.getDay()];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var year = a.getFullYear();

  //time
  var hr = a.getHours();
  var mins = a.getMinutes();
  var secs = a.getSeconds();
  var am_pm = "AM";

  //setting up 12hr format
  if (hr == 0) {
    hr = 12;
  }
  if (hr > 12) {
    hr = hr - 12;
    am_pm = "PM";
  }

  var ids = [
    "day",
    "month",
    "dayInNum",
    "year",
    "hours",
    "mins",
    "secs",
    "am_pm",
  ];
  var values = [dayname, month, date, year, hr, mins, secs, am_pm];

  //adding padding zeros
  for (var j = 4; j <= 6; j++) {
    if (values[j] < 10) {
      values[j] = "0" + values[j];
    }
  }

  //modifying innerHTML

  for (var i = 0; i < values.length; i++) {
    document.getElementById(ids[i]).innerHTML = values[i];
  }
};

setInterval(clockUpdate, 1000);
