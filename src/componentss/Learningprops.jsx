export default function LearningProps() {
  const FirstName = "Gaurav";
  const SecondName = "Raj";
  const hours = new Date().getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "afternoon";
  } else if (hours < 21) {
    timeofDay = "evening";
  } else {
    timeofDay = "night";
  }
  return (
    <main>
      <div className="container py-5 justify-center mx-[400px]">
        <p className="text-2xl pb-6">Using Expression defining values </p>
        <h2>
          Hello {FirstName} {SecondName}
        </h2>
        <p>Goot {timeofDay}</p>
      </div>
    </main>
  );
}
