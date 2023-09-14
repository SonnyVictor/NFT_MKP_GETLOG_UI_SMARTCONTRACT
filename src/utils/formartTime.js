import moment from "moment";
export const calculateHoursRemaining = (timestamp) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const secondsRemaining = timestamp - currentTimestamp;
  const hoursRemaining = Math.floor(secondsRemaining / 3600);
  return hoursRemaining;
};
export const convertTime = (timestamp) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);

  if (timestamp >= currentTimestamp) {
    return "Expired";
  }

  const hoursRemaining = calculateHoursRemaining(timestamp);
  return `Expires in ${hoursRemaining} hours`;
};

export const convertTimeEnd = (timestamp) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const differenceInSeconds = currentTimestamp - timestamp;
  const duration = moment.duration(differenceInSeconds, "seconds");
  const timeString = duration.humanize();

  return `${timeString}`;
};
export const convertendTime = (timestamp) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const timeRemaining = timestamp - currentTime;
  const hoursRemaining = Math.floor(timeRemaining / 3600);
  const minutesRemaining = Math.floor((timeRemaining % 3600) / 60);
  const secondsRemaining = timeRemaining % 60;

  return `${hoursRemaining + minutesRemaining + secondsRemaining}`;
};

export const convertUnixTimeToExpirationTime = (unixTime) => {
  const expirationDate = new Date(unixTime * 1000);

  const day = expirationDate.getDate();
  const month = expirationDate.getMonth() + 1;
  const year = expirationDate.getFullYear();
  const hours = expirationDate.getHours();
  const minutes = expirationDate.getMinutes();
  const seconds = expirationDate.getSeconds();
  const expirationTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return expirationTime;
};
