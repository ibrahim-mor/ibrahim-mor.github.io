// Import jQuery
$(document).ready(() => {
  const methods = [
    {
      icon: "fa-gift",
      title: "العروض والهدايا الرسمية",
      color: "text-yellow-500",
      content: `تُعد العروض والهدايا التي تقدمها شركة Garena المطورة للعبة Free Fire MAX واحدة من أفضل الطرق للحصول على حسابات مجانية. من وقت لآخر، تقوم الشركة بإطلاق مسابقات وأحداث خاصة تمنح اللاعبين مكافآت كبيرة، بما في ذلك حسابات جاهزة بأزياء وجواهر مجانية. تأكد من زيارة الموقع الرسمي باستمرار، وشارك في المسابقات الموسمية، واحضر البثوث المباشرة على يوتيوب وفيسبوك للحصول على فرص الفوز بحسابات مجانية.`,
    },
    {
      icon: "fa-exchange-alt",
      title: "مواقع تبادل الحسابات",
      color: "text-blue-500",
      content: `هناك العديد من المواقع التي توفر منصات موثوقة لتبادل أو شراء حسابات Free Fire MAX بأسعار رمزية أو حتى الحصول عليها مجانًا. هذه المواقع تتيح للاعبين بيع حساباتهم أو تبادلها بطريقة آمنة. من أفضل هذه المواقع: PlayerAuctions، Eldorado.gg، Z2U، وG2G. تأكد دائمًا من تقييمات المستخدمين قبل شراء أو تبادل أي حساب، ولا تتعامل مع بائعين غير موثوقين.`,
    },
    {
      icon: "fa-code",
      title: "أكواد الاسترداد المجانية",
      color: "text-green-500",
      content: `تعتبر أكواد الاسترداد واحدة من أسهل الطرق للحصول على حسابات قوية أو عناصر داخل اللعبة مجانًا. يتم إصدار هذه الأكواد من قبل Garena ويمكن استخدامها للحصول على جواهر، أزياء، وحتى حسابات كاملة. تأكد من زيارة الموقع الرسمي للأكواد، ومتابعة المؤثرين واليوتيوبرز، والانضمام إلى قنوات تليجرام وفيسبوك المخصصة لمشاركة الأكواد الحديثة يوميًا. تذكر أن الأكواد تنتهي صلاحيتها بسرعة، لذا قم باستخدامها فور العثور عليها.`,
    },
    {
      icon: "fa-users",
      title: "مجتمعات Free Fire MAX",
      color: "text-purple-500",
      content: `يمكنك العثور على حسابات مجانية من خلال الانضمام إلى المجتمعات التي تجمع لاعبي Free Fire MAX، حيث يشارك البعض حساباتهم القديمة أو يقدمون حسابات مجانية في بعض المسابقات الداخلية. انضم إلى مجموعة Free Fire Max على فيسبوك، قناة Free Fire Max على تيليجرام، وخادم Free Fire Discord الرسمي للتفاعل مع لاعبين آخرين ومتابعة أحدث العروض. تذكر دائمًا عدم إعطاء معلومات حسابك الشخصي لأي شخص يدعي أنه يبيع حسابات مجانية.`,
    },
    {
      icon: "fa-handshake",
      title: "التواصل مع اللاعبين المعتزلين",
      color: "text-red-500",
      content: `العديد من اللاعبين يعتزلون اللعب ويتركون حساباتهم بدون استخدام، ويمكنك الاستفادة من ذلك عبر التواصل معهم وطلب الحصول على حساباتهم. ابحث عن منشورات اللاعبين المعتزلين في مجموعات فيسبوك ومنتديات الألعاب، وانضم إلى منتديات Reddit و Discord مثل r/FreeFire. إذا كان لديك أصدقاء أو تعرف لاعبين قدامى لم يعودوا يستخدمون حساباتهم، يمكنك طلب الحصول على حسابهم. تذكر أن تكون لبقًا ومحترمًا عند طلب حساب.`,
    },
  ]

  let activeMethod = 0
  const soundEffect = new Howl({
    src: ["/sound-effect.mp3"],
  })

  function renderMethodButtons() {
    const $methodButtons = $("#methodButtons")
    methods.forEach((method, index) => {
      const $button = $(`
                <button class="method-button ${index === activeMethod ? "active" : ""}">
                    <i class="fas ${method.icon} ${method.color}"></i>
                    <span>${method.title}</span>
                </button>
            `)
      $button.on("click", () => handleMethodClick(index))
      $methodButtons.append($button)
    })
  }

  function renderMethodsGrid() {
    const $methodsGrid = $("#methodsGrid")
    methods.forEach((method, index) => {
      const $card = $(`
                <div class="method-card">
                    <i class="fas ${method.icon} ${method.color} text-4xl mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">${method.title}</h3>
                    <p class="text-gray-400 mb-4">انقر للمزيد من التفاصيل حول هذه الطريقة.</p>
                    <div class="arrow">
                        <i class="fas fa-arrow-left text-xl text-blue-500"></i>
                    </div>
                </div>
            `)
      $card.on("click", () => handleMethodClick(index))
      $methodsGrid.append($card)
    })
  }

  function handleMethodClick(index) {
    activeMethod = index
    updateActiveMethod()
    showMethodContent()
    soundEffect.play()
  }

  function updateActiveMethod() {
    $(".method-button").removeClass("active")
    $(`.method-button:eq(${activeMethod})`).addClass("active")
  }

  function showMethodContent() {
    const method = methods[activeMethod]
    const $methodContent = $("#methodContent")
    $methodContent.html(`
            <h3 class="text-2xl font-bold mb-4 ${method.color}">${method.title}</h3>
            <p class="text-gray-300">${method.content}</p>
        `)
    $methodContent.removeClass("hidden")
  }

  function cycleMethod() {
    activeMethod = (activeMethod + 1) % methods.length
    updateActiveMethod()
    showMethodContent()
  }

  renderMethodButtons()
  renderMethodsGrid()
  showMethodContent()

  setInterval(cycleMethod, 5000)

  $("#currentYear").text(new Date().getFullYear())
})

