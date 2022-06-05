const achievementsList = [
  {
    name: "courses",
    list: [
      "Легкость ораторского мастерства",
      "Власть и сила твоих возможностей",
      "Создай наилучшие версию себя",
      "Генеральная уборка в твоей голове",
      "Говори с ним без проблем",
    ],
  },
  {
    name: "trainings",
    list: [
      "Как создать крепкую самооценку через любовь к себе",
      "Деньги",
      "Энергия женских денег",
      "Твоё ресурсное состояние",
      "Возможности твоей линии времени",
      "Женщина за которой идут",
      "Магия женского влияния",
      "Магия флирта",
      "Как договариваться с мужчиной по-женски",
      "Счастье в привычку",
      "Управляй эмоциями, получай желаемое",
      "Мозг. Привычки. Действия",
      "Внутри женщины",
      "Мозг, привычки, руководство к действию",
    ],
  },

  {
    name: "marathons",
    list: [
      "Красота и молодость 'Влюбись в свою жизнь'",
      "Элегантность в привычку",
      "Воплощение молодости и красоты",
      "Воспитание себя или как быть красивой",
      "Внутренняя стабильность",
      "Энергетический курс",
      "Как сохранить счастливые отношения"
    ],
  },
  {
    name: "intensives",
    list: [
      "Time to detox",
      "Life is good",
      "Привет,Мир. Это новая Я",
      "Ради себя ЛЮБИМОЙ",
      "Ароматы СЧАСТЬЯ",
      "КОД НОВОЙ ЖЕНСТВЕННОСТИ",
    ],
  },
];
export const Achievements = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1.5vw",
        paddingBottom: "4vw",
      }}
    >
      <h4 style={{color: "black"}}>Achievements</h4>
      <div
        className='achievements-wrapper'
      >
        {achievementsList.map(({ name, icon, list }, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexFlow: "row-wrap",
                flexGrow: 1,
              }}
              key={name}
            >
              <div className={`achievements-card card-${index}`} style={{}}>
                <div style={{ margin: "0 auto" }}>
                  <span
                    style={{
                      textTransform: "uppercase",
                      color: "#ad7a62",
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                  </span>
                </div>

                <ul className="achievements">
                  {list.map((item) => (
                    <li key={item} style={{ paddingRight: "20px" }}>
                      <p
                        style={{
                          fontSize: "calc((0.8 - 1) * 1.2vh + 1rem)",
                          margin: 0,
                        }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
