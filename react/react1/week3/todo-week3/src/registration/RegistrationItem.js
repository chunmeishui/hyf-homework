export const RegistrationItem = ({
  id,
  name,
  startDate,
  endDate,
  startTime,
  endTime,
}) => {
  const endInMinutes = endTime.split(":");
  const totalEndMinutes =
    Number(endInMinutes[0]) * 60 + Number(endInMinutes[1]);
  const startInMinutes = startTime.split(":");
  const totalStartMinutes =
    Number(startInMinutes[0]) * 60 + Number(startInMinutes[1]);
  const workingMinutes = totalEndMinutes - totalStartMinutes;
  const hours = Math.floor(workingMinutes / 60);
  const minutes = workingMinutes % 60;
  const total = hours + " hours " + minutes + " mins";
  const totalPrice = hours * 150 + (minutes / 60) * 150;
  return (
    <div className="display">
      <p> Name : {name}</p>
      <p>
        Start time :{startDate} {startTime}
      </p>
      <p className="endTime">
        {" "}
        End time:{endDate} {endTime}
      </p>
      <p> Working hour :{total}</p>
      <p> Price:{totalPrice} Kr</p>
    </div>
  );
};
