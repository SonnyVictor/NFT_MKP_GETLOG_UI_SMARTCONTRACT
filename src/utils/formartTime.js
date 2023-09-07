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
  // Chuyển đổi thời gian Unix thành đối tượng Date
  const expirationDate = new Date(unixTime * 1000); // Giây cần nhân 1000 để chuyển sang mili giây

  // Trích xuất các thành phần của thời gian hết hạn (ngày, tháng, năm, giờ, phút, giây)
  const day = expirationDate.getDate();
  const month = expirationDate.getMonth() + 1; // Tháng trong JavaScript đếm từ 0
  const year = expirationDate.getFullYear();
  const hours = expirationDate.getHours();
  const minutes = expirationDate.getMinutes();
  const seconds = expirationDate.getSeconds();

  // Tạo chuỗi đại diện cho thời gian hết hạn
  const expirationTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return expirationTime;
};
