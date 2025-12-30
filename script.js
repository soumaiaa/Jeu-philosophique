let lang="fr",step=0,started=false;
let wa3y=50,qana3a=50,ma3na=50;

/* ===== QUESTIONS ===== */
const stages=[
{
  fr:"Si personne ne te jugeait jamais, serais-tu différent ?",
  ar:"لو لم يحكم عليك أحد أبدًا، هل ستكون شخصًا مختلفًا؟",
  en:"If no one ever judged you, would you be different?",
  choices:[
    {fr:"Oui, totalement", ar:"نعم، كليًا", en:"Yes, completely", points:{wa3y:10,qana3a:0,ma3na:10}},
    {fr:"Non, je suis fidèle à moi-même", ar:"لا، أنا وفيّ لنفسي", en:"No, I stay true to myself", points:{wa3y:5,qana3a:10,ma3na:5}},
    {fr:"Je n’en suis pas sûr", ar:"لست متأكدًا", en:"I’m not sure", points:{wa3y:5,qana3a:0,ma3na:0}}
  ]
},
{
  fr:"Vaut-il mieux vivre longtemps ou intensément ?",
  ar:"هل الأفضل أن تعيش طويلًا أم بعمق؟",
  en:"Is it better to live long or to live deeply?",
  choices:[
    {fr:"Longtemps", ar:"طويلًا", en:"Long", points:{wa3y:-5,qana3a:10,ma3na:0}},
    {fr:"Intensément", ar:"بعمق", en:"Deeply", points:{wa3y:10,qana3a:-5,ma3na:10}},
    {fr:"Un équilibre", ar:"توازن", en:"Balance", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Le silence est-il une fuite ou une sagesse ?",
  ar:"هل الصمت هروب أم حكمة؟",
  en:"Is silence an escape or wisdom?",
  choices:[
    {fr:"Une fuite", ar:"هروب", en:"An escape", points:{wa3y:-5,qana3a:0,ma3na:-5}},
    {fr:"Une sagesse", ar:"حكمة", en:"Wisdom", points:{wa3y:10,qana3a:5,ma3na:10}},
    {fr:"Cela dépend du moment", ar:"يعتمد على اللحظة", en:"It depends on the moment", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Peux-tu être heureux sans comprendre le sens de ta vie ?",
  ar:"هل يمكنك أن تكون سعيدًا دون فهم معنى حياتك؟",
  en:"Can you be happy without understanding your life’s meaning?",
  choices:[
    {fr:"Oui", ar:"نعم", en:"Yes", points:{wa3y:-5,qana3a:10,ma3na:-5}},
    {fr:"Non", ar:"لا", en:"No", points:{wa3y:10,qana3a:-5,ma3na:10}},
    {fr:"Temporairement", ar:"مؤقتًا", en:"Temporarily", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Changer par amour est-il une perte de soi ?",
  ar:"هل التغير من أجل الحب فقدان للذات؟",
  en:"Is changing for love losing yourself?",
  choices:[
    {fr:"Oui", ar:"نعم", en:"Yes", points:{wa3y:-5,qana3a:-5,ma3na:0}},
    {fr:"Non", ar:"لا", en:"No", points:{wa3y:10,qana3a:10,ma3na:5}},
    {fr:"Parfois", ar:"أحيانًا", en:"Sometimes", points:{wa3y:5,qana3a:0,ma3na:5}}
  ]
},
{
  fr:"La vérité doit-elle toujours être dite ?",
  ar:"هل يجب قول الحقيقة دائمًا؟",
  en:"Should the truth always be told?",
  choices:[
    {fr:"Toujours", ar:"دائمًا", en:"Always", points:{wa3y:10,qana3a:5,ma3na:10}},
    {fr:"Non", ar:"لا", en:"No", points:{wa3y:-5,qana3a:10,ma3na:-5}},
    {fr:"Avec conscience", ar:"بوعي", en:"With awareness", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Es-tu plus souvent guidé par la peur ou par le désir ?",
  ar:"هل تقودك المخاوف أم الرغبات أكثر؟",
  en:"Are you guided more by fear or desire?",
  choices:[
    {fr:"La peur", ar:"الخوف", en:"Fear", points:{wa3y:-5,qana3a:-5,ma3na:-5}},
    {fr:"Le désir", ar:"الرغبة", en:"Desire", points:{wa3y:5,qana3a:5,ma3na:5}},
    {fr:"Les deux", ar:"كلاهما", en:"Both", points:{wa3y:5,qana3a:0,ma3na:0}}
  ]
},
{
  fr:"Se connaître soi-même est-il une fin ou un début ?",
  ar:"معرفة النفس نهاية أم بداية؟",
  en:"Is self-knowledge an end or a beginning?",
  choices:[
    {fr:"Une fin", ar:"نهاية", en:"An end", points:{wa3y:-5,qana3a:0,ma3na:0}},
    {fr:"Un début", ar:"بداية", en:"A beginning", points:{wa3y:10,qana3a:5,ma3na:10}},
    {fr:"Un chemin", ar:"طريق", en:"A journey", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Préférerais-tu être compris ou accepté ?",
  ar:"هل تفضل أن تُفهم أم أن تُقبل؟",
  en:"Would you rather be understood or accepted?",
  choices:[
    {fr:"Compris", ar:"مفهوم", en:"Understood", points:{wa3y:10,qana3a:0,ma3na:5}},
    {fr:"Accepté", ar:"مقبول", en:"Accepted", points:{wa3y:0,qana3a:10,ma3na:0}},
    {fr:"Les deux", ar:"كلاهما", en:"Both", points:{wa3y:5,qana3a:5,ma3na:5}}
  ]
},
{
  fr:"Si ta vie était un message, que dirait-elle ?",
  ar:"لو كانت حياتك رسالة، ماذا ستقول؟",
  en:"If your life were a message, what would it say?",
  choices:[
    {fr:"Cherche la vérité", ar:"ابحث عن الحقيقة", en:"Seek the truth", points:{wa3y:10,qana3a:5,ma3na:10}},
    {fr:"Aime sans peur", ar:"أحب دون خوف", en:"Love without fear", points:{wa3y:5,qana3a:10,ma3na:10}},
    {fr:"Vis simplement", ar:"عش ببساطة", en:"Live simply", points:{wa3y:5,qana3a:10,ma3na:5}}
  ]
}
];

/* ===== SHUFFLE ===== */
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}}

/* ===== SHOW QUESTION ===== */
function showQuestion(){
  if(step>=stages.length){showResult();return;}
  const s=stages[step];
  question.innerText=s[lang];
  choices.innerHTML="";
  s.choices.forEach(c=>{
    const b=document.createElement("button");
    b.innerText=c[lang];
    b.onclick=()=>{
      wa3y+=c.points.wa3y;
      qana3a+=c.points.qana3a;
      ma3na+=c.points.ma3na;
      step++;showQuestion();
    };
    choices.appendChild(b);
  });
  stats.innerText=`🧠 ${wa3y} | ⚖️ ${qana3a} | 🕯️ ${ma3na}`;
}

/* ===== RESULT ===== */
function showResult(){

  const texts = {

    fr:`
🧠 Relation à toi-même
${wa3y>=70
? "Tu possèdes une conscience élevée. Tu analyses tes pensées, tes émotions et tes choix avec profondeur. Cette lucidité te rend réfléchi, parfois exigeant envers toi-même."
: wa3y>=50
? "Ta conscience est équilibrée. Tu alternes entre réflexion et spontanéité, cherchant souvent à comprendre sans te perdre dans l’excès."
: "Tu vis davantage dans l’instant. Tu avances sans trop analyser, ce qui te donne légèreté mais peut parfois masquer des questions importantes."
}

⚖️ Relation au monde
${qana3a>=70
? "Tes convictions sont solides. Tu sais ce que tu veux et ce que tu refuses. Le défi est de rester ouvert sans perdre ta cohérence."
: qana3a>=50
? "Tu es adaptable et à l’écoute. Cette flexibilité est une force, tant qu’elle ne t’éloigne pas de tes propres valeurs."
: "Tu te laisses souvent guider par les circonstances. Cela réduit les conflits, mais peut donner l’impression d’une vie choisie à moitié."
}

🕯️ Relation au sens
${ma3na>=70
? "Tu es en quête de sens. Tu refuses la superficialité et cherches à comprendre le pourquoi de ton existence."
: ma3na>=50
? "Le sens apparaît par moments dans ta vie. Tu avances sans toujours chercher de grandes réponses, mais tu y reviens quand le besoin se fait sentir."
: "Le sens n’est pas ta priorité actuelle. Peut-être es-tu dans une phase de protection ou de reconstruction."
}

🌱 Conclusion
Tu n’es pas un résultat figé, mais un chemin en mouvement. Chaque choix te transforme.`,

    ar:`
🧠 علاقتك بذاتك
${wa3y>=70
? "لديك وعي عميق بذاتك. تفكر، تلاحظ، وتراجع اختياراتك باستمرار. هذا يمنحك نضجًا، لكنه أحيانًا يثقل عليك."
: wa3y>=50
? "وعيك متوازن. تجمع بين التفكير والعفوية، وتحاول الفهم دون الإفراط في التحليل."
: "تعيش اللحظة أكثر من التفكير. هذا يمنحك خفة، لكنه قد يؤجل مواجهة بعض الأسئلة المهمة."
}

⚖️ علاقتك بالعالم
${qana3a>=70
? "قناعاتك قوية وواضحة. تعرف ما تريد، لكن التحدي هو التفرقة بين الثبات والجمود."
: qana3a>=50
? "أنت مرن ومتأثر بالسياق. هذه إنسانية جميلة ما دامت لا تشتتك عن ذاتك."
: "غالبًا ما تترك الظروف تقودك. هذا يخفف الصراع لكنه قد يجعلك تشعر بأنك لم تختر كل شيء."
}

🕯️ علاقتك بالمعنى
${ma3na>=70
? "أنت باحث عن المعنى. تسأل لماذا وإلى أين، ولا تكتفي بالإجابات السطحية."
: ma3na>=50
? "المعنى حاضر أحيانًا في حياتك. تعيش ببساطة وتعود للأسئلة حين تحتاجها."
: "المعنى ليس أولوية الآن. ربما لأنك في مرحلة بناء أو حماية للذات."
}

🌱 خلاصة
أنت لست نتيجة اختبار، بل رحلة مستمرة. كل اختيار يشكّلك.`,

    en:`
🧠 Relationship with yourself
${wa3y>=70
? "You have a high level of self-awareness. You reflect deeply on your thoughts and choices, which gives you clarity but sometimes mental weight."
: wa3y>=50
? "Your awareness is balanced. You move between reflection and spontaneity with relative ease."
: "You live mostly in the present. This brings lightness, but may delay deeper self-questioning."
}

⚖️ Relationship with the world
${qana3a>=70
? "You have strong convictions. You know where you stand, though staying open remains your challenge."
: qana3a>=50
? "You are adaptable and attentive. This openness is a strength when guided by inner values."
: "You often let circumstances decide. This reduces conflict but may feel limiting."
}

🕯️ Relationship with meaning
${ma3na>=70
? "You are a seeker of meaning. You question existence beyond surface-level answers."
: ma3na>=50
? "Meaning appears at certain moments in your life. You explore it when needed."
: "Meaning is not your priority right now. You may be in a phase of rebuilding."
}

🌱 Final thought
You are not a fixed result, but a path in motion. Every choice shapes you.`
  };

  choices.innerHTML = "";
  question.innerText =
    lang==="fr" ? "=== Analyse philosophique ===" :
    lang==="ar" ? "=== تحليل فلسفي ===" :
    "=== Philosophical Analysis ===";

  result.innerText = texts[lang];

  shareBtn.style.display = "block";
  startBtn.style.display = "block";
  startBtn.innerText =
    lang==="fr" ? "Recommencer" :
    lang==="ar" ? "ابدأ من جديد" :
    "Restart";
}

/* ===== START ===== */
startBtn.onclick=()=>{
  step=0;wa3y=qana3a=ma3na=50;
  shuffle(stages);
  started=true;
  startBtn.style.display="none";
  shareBtn.style.display="none";
  result.innerText="";
  showQuestion();
};

/* ===== LANG SWITCH ===== */
document.querySelectorAll(".lang-btn").forEach(b=>{
  b.onclick=()=>{
    lang=b.dataset.lang;
    document.querySelectorAll(".lang-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    title.innerText=lang==="fr"?"Jeu philosophique":lang==="ar"?"لعبة الفلسفة":"Philosophical Game";
    subtitle.innerText=lang==="fr"?"Répondez aux questions et découvrez votre personnalité":
                       lang==="ar"?"أجب على الأسئلة واكتشف شخصيتك":
                       "Answer the questions and discover your personality";
    document.getElementById("startBtn").innerText =
    lang === "fr" ? "Commencer" :
    lang === "ar" ? "ابدأ اللعبة" :
                    "Start";
    if(started){step<stages.length?showQuestion():showResult();}
  };
});

/* ===== SHARE ===== */
shareBtn.onclick=()=>{
  const text=encodeURIComponent(result.innerText);
  const url=encodeURIComponent(location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,"_blank");
};