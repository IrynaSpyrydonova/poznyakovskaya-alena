import Image from "next/image";


const servicesList = [
"личностный рост",
"освобождение от негативных программ",
"улучшение материальных благ/тема финансов",
"освобождение от детских психологических травм/работа с глубинными проблемами",
"открытие женственности/сексуальности",
"диетология",
"подбор правильного питания/ физических упражнений",
"идилия отношений"
]

export const MainSection = () => {
  return (
    <section className="mainSection" id="mainSection">
      <div
        style={{
          textAlign: "start",
          maxWidth: "1024px",
          margin: "0 auto",
          marginBottom: "80px",

        }}
      >
        <h3  style={{
          textAlign: "center",          
        }}>Ты чувствуешь, что стресс завладел твоей жизнью? </h3>
        <p>
          Мы будем работать с чувством подавленности, чтобы помочь тебе обрести понимание, развить силу и навыки совладания, чтобы предоставить тебе инструменты для управления сложными эмоциями, межличностными отношениями и жизненными переменами.
        </p>
      </div>

      <div className="mainSection-content-wrapper">
        <div className="mainSection-image">
          {" "}
          <Image
            src={"/alena_portret.webp"}
            alt={"Alena's portret"}
            width={450}
            height={562}
            placeholder="blur"
            priority={true}
          />
        </div>

        <div className="mainSection-content">
          <h4 style={{marginTop: 0, marginBottom: 0}}>Давай работать вместе</h4>
          <p>
            Я помогу тебе справится с трудными ситуациями, поверить в себя, обрести партнерство как в бизнесе, так и в личных отношениях, а так же проработать такие темы, как:
          </p>
          <ul className="services-list" style={{margin: 0}}>
          {servicesList.map((list)=>{
            return (
              <li key={list}><p>{list}</p></li>
            )
          })}
          </ul>
          <p>И множество других индивидуальных консультаций, направленных на твои личные потребности и диагностику в целом.</p>

        </div>
      </div>
    </section>
  );
};
