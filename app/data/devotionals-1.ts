import type { Devotional } from "../types";

const getDevotionalDate = (id: string): string => {
  const now = new Date();
  const day = parseInt(id);
  const targetDate = new Date(now.getFullYear(), now.getMonth(), day);
  return targetDate.toDateString();
};

export const devotionals: Devotional[] = [
  {
    id: "1",
    date: getDevotionalDate("1"),
    verse: {
      reference: "John 14:6",
      defaultVersion: "KJV",
    },
    title: "The Way, The Truth, The Life",
    content: `Jesus declares Himself as the only way to the Father. In a world of confusion, He reveals God's truth and offers eternal life. This profound revelation brings peace to our searching hearts.

    As the embodiment of truth, Jesus cuts through deception and shows us the Father's heart. His life demonstrates the perfect revelation of God's character - full of grace and truth.

    How does knowing Jesus as the ultimate truth change your perspective on life's questions? In what areas do you need His revelation today?`,
    prayer: `Heavenly Father, thank You for revealing Yourself through Jesus Christ. Help me to see You more clearly through His life and teachings. Guide me into all truth and give me Your peace. In Jesus' name, Amen.`,
    readingPlan: "John 14-15",
    reflection: [
      {
        id: "1-1",
        question: "What truth about God has Jesus revealed to you recently?",
        placeholder: "Describe a new insight or understanding...",
      },
      {
        id: "1-2",
        question: "How does Jesus being 'the way' bring peace to your journey?",
        placeholder: "Reflect on direction and purpose...",
      },
      {
        id: "1-3",
        question:
          "Where do you need God's revelation in your current situation?",
        placeholder: "Identify areas of confusion or decision...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      reference: "John 14:27",
      defaultVersion: "KJV",
    },
    title: "Peace That Surpasses",
    content: `Jesus offers a peace that the world cannot give - a peace rooted in truth and His revelation of the Father. This divine peace calms our fears and anchors our souls in God's faithfulness.

    Unlike temporary worldly peace, Christ's peace withstands storms and uncertainties. It flows from our relationship with Him and our understanding of God's character.`,
    prayer: `Prince of Peace, I receive Your gift of peace today. Quiet my heart with the truth of Your presence and Your promises. Reveal the Father's love to me in fresh ways. Amen.`,
    readingPlan: "John 14-16",
    reflection: [
      {
        id: "2-1",
        question: "What threatens your peace right now?",
        placeholder: "Name specific concerns or fears...",
      },
      {
        id: "2-2",
        question: "How has God's truth brought peace in past situations?",
        placeholder: "Recall examples of God's faithfulness...",
      },
      {
        id: "2-3",
        question:
          "What practical step can you take to receive Christ's peace today?",
        placeholder: "Consider prayer, worship, or Scripture meditation...",
      },
    ],
  },
  {
    id: "3",
    date: getDevotionalDate("3"),
    verse: {
      reference: "John 1:14",
      defaultVersion: "KJV",
    },
    title: "The Word Became Flesh",
    content: `In Jesus, God's truth took on human form. The invisible God became visible, full of grace and truth. This ultimate revelation shows us God's heart and brings peace through understanding His nature.

    Every word Jesus spoke, every action He took, revealed the Father's character. Through Christ, we see God's glory manifested in human life.`,
    prayer: `Father, thank You for making Yourself known through Jesus. Help me to behold His glory and understand the truth of Your grace. Give me peace as I see Your character revealed. Amen.`,
    readingPlan: "John 1",
    reflection: [
      {
        id: "3-1",
        question: "What aspect of God's character has Jesus revealed to you?",
        placeholder: "Consider grace, mercy, holiness, love...",
      },
      {
        id: "3-2",
        question: "How does knowing God became flesh impact your daily life?",
        placeholder: "Reflect on intimacy with God...",
      },
      {
        id: "3-3",
        question: "Where do you need to see God's glory revealed today?",
        placeholder: "Identify specific needs or situations...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      reference: "John 16:13",
      defaultVersion: "KJV",
    },
    title: "Spirit of Truth",
    content: `Jesus promised the Holy Spirit would guide us into all truth. This ongoing revelation brings peace as we understand God's will and character more deeply.

    The Spirit reveals truth about God, ourselves, and our purpose. He brings clarity where there's confusion and peace where there's turmoil.`,
    prayer: `Holy Spirit, guide me into all truth today. Reveal what I need to know about God and His will for me. Bring Your peace as I follow Your guidance. Amen.`,
    readingPlan: "John 16",
    reflection: [
      {
        id: "4-1",
        question: "What truth is the Holy Spirit revealing to you currently?",
        placeholder: "Be specific about recent insights...",
      },
      {
        id: "4-2",
        question: "How do you discern the Spirit's guidance in your life?",
        placeholder: "Describe your process of discernment...",
      },
      {
        id: "4-3",
        question: "Where do you need spiritual clarity and peace today?",
        placeholder: "Identify areas of confusion...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      reference: "John 8:32",
      defaultVersion: "KJV",
    },
    title: "Truth That Sets Free",
    content: `Knowing the truth that Jesus reveals brings genuine freedom. This isn't just intellectual knowledge but relational understanding of God's character and purposes.

    God's truth exposes lies we've believed and brings peace to troubled hearts. Freedom comes as we embrace what God says about us and His world.`,
    prayer: `Lord Jesus, thank You for the freedom Your truth brings. Help me to know Your truth deeply and experience the peace that comes from walking in it. Amen.`,
    readingPlan: "John 8",
    reflection: [
      {
        id: "5-1",
        question: "What lie have you believed that God's truth is exposing?",
        placeholder: "Identify specific false beliefs...",
      },
      {
        id: "5-2",
        question: "How has God's truth brought freedom to your life?",
        placeholder: "Share specific examples...",
      },
      {
        id: "5-3",
        question: "What area of your life needs God's liberating truth today?",
        placeholder: "Be honest about current struggles...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      reference: "Colossians 1:15",
      defaultVersion: "KJV",
    },
    title: "Image of the Invisible God",
    content: `Jesus is the exact representation of the invisible God. When we look at Christ, we see the Father's heart, character, and purposes perfectly revealed.

    This revelation brings peace because we no longer have to guess what God is like. Jesus shows us a loving, compassionate, and holy Father.`,
    prayer: `Heavenly Father, thank You for revealing Yourself perfectly through Jesus. Help me to see You more clearly as I study Christ's life and teachings. Amen.`,
    readingPlan: "Colossians 1",
    reflection: [
      {
        id: "6-1",
        question: "What misconception about God has Jesus corrected for you?",
        placeholder: "Describe a changed perspective...",
      },
      {
        id: "6-2",
        question: "How does seeing Jesus as God's image impact your worship?",
        placeholder: "Reflect on your worship response...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      reference: "Ephesians 2:14",
      defaultVersion: "KJV",
    },
    title: "Our Peace",
    content: `Jesus Himself is our peace, breaking down walls of separation between us and God, and between one another. His revelation brings reconciliation and unity.

    True peace comes not from circumstances but from relationship with the Prince of Peace. He makes us whole and restores broken relationships.`,
    prayer: `Prince of Peace, thank You for being my peace. Heal my relationships and bring unity where there's division. Reveal Your peace in every situation. Amen.`,
    readingPlan: "Ephesians 2",
    reflection: [
      {
        id: "7-1",
        question: "What relationship needs Christ's peace right now?",
        placeholder: "Identify specific relationships...",
      },
      {
        id: "7-2",
        question: "How has Jesus brought peace to your relationship with God?",
        placeholder: "Reflect on reconciliation...",
      },
      {
        id: "7-3",
        question: "Where do you need to be a peacemaker this week?",
        placeholder: "Consider opportunities for reconciliation...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      reference: "John 1:17",
      defaultVersion: "KJV",
    },
    title: "Grace and Truth",
    content: `Through Jesus Christ, grace and truth came into full expression. God's revelation balances perfect truth with abundant grace, bringing peace to guilty hearts.

    We don't have to choose between truth and love - in Jesus, we see both perfectly embodied. His truth confronts while His grace restores.`,
    prayer: `Lord Jesus, thank You for bringing both grace and truth. Help me to speak truth in love and extend grace as You have to me. Amen.`,
    readingPlan: "John 1",
    reflection: [
      {
        id: "8-1",
        question:
          "How have you experienced God's grace and truth in your life?",
        placeholder: "Share a personal experience...",
      },
      {
        id: "8-2",
        question: "Where do you need more grace in speaking truth to others?",
        placeholder: "Identify relationships...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      reference: "Philippians 4:7",
      defaultVersion: "KJV",
    },
    title: "Peace That Guards",
    content: `God's peace stands guard over our hearts and minds when we trust in Christ's revelation. This supernatural peace transcends human understanding and circumstances.

    Like a soldier guarding a fortress, God's peace protects us from anxiety and fear when we rest in His truth.`,
    prayer: `Heavenly Father, I receive Your peace that guards my heart and mind. Help me to trust in Your revelations and promises today. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "9-1",
        question: "What thoughts try to steal your peace?",
        placeholder: "Identify anxious thoughts...",
      },
      {
        id: "9-2",
        question: "How has God's peace protected you in the past?",
        placeholder: "Recall specific instances...",
      },
      {
        id: "9-3",
        question: "What truth from Scripture can guard your heart today?",
        placeholder: "Choose a specific verse...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      reference: "2 Corinthians 4:6",
      defaultVersion: "KJV",
    },
    title: "Light of Revelation",
    content: `God shines His light in our hearts to give us the knowledge of His glory in the face of Jesus Christ. This revelation illuminates our understanding and brings peace.

    The same God who said "Let there be light" shines spiritual light to reveal Jesus to us. This light brings truth and dispels darkness.`,
    prayer: `Father of lights, shine in my heart today. Reveal Jesus to me in fresh ways and give me peace through knowing Him better. Amen.`,
    readingPlan: "2 Corinthians 4",
    reflection: [
      {
        id: "10-1",
        question: "What has God recently illuminated in your understanding?",
        placeholder: "Describe a new insight...",
      },
      {
        id: "10-2",
        question: "How does knowing Christ bring light to your decisions?",
        placeholder: "Consider current choices...",
      },
      {
        id: "10-3",
        question: "Where do you need God's light to shine today?",
        placeholder: "Identify dark areas...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      reference: "John 16:33",
      defaultVersion: "KJV",
    },
    title: "Peace in Trouble",
    content: `Jesus offers peace in the midst of trouble, not freedom from trouble. His revelation of overcoming the world gives us courage and peace in challenges.

    Our peace comes from knowing Jesus has already overcome everything we face. His victory becomes our victory through faith.`,
    prayer: `Lord Jesus, thank You for Your peace in my troubles. Help me to remember Your victory and find courage in Your overcoming power. Amen.`,
    readingPlan: "John 16",
    reflection: [
      {
        id: "11-1",
        question: "What trouble are you facing that needs Christ's peace?",
        placeholder: "Be specific about your situation...",
      },
      {
        id: "11-2",
        question: "How has Jesus proven victorious in your past struggles?",
        placeholder: "Recall His faithfulness...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      reference: "1 John 5:20",
      defaultVersion: "KJV",
    },
    title: "Understanding the True God",
    content: `The Son of God has come and given us understanding so we may know the true God. This revelation brings peace through certainty about who God is.

    In a world of spiritual confusion, Jesus gives us clear understanding of the Father's nature and character.`,
    prayer: `Heavenly Father, thank You for giving understanding through Jesus. Help me to know You truly and find peace in Your revealed character. Amen.`,
    readingPlan: "1 John 5",
    reflection: [
      {
        id: "12-1",
        question: "What aspect of God's character brings you most peace?",
        placeholder: "Consider His love, faithfulness, power...",
      },
      {
        id: "12-2",
        question: "How has your understanding of God grown through Jesus?",
        placeholder: "Describe your spiritual journey...",
      },
      {
        id: "12-3",
        question: "Where do you need deeper understanding of God today?",
        placeholder: "Identify areas of questioning...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      reference: "Isaiah 9:6",
      defaultVersion: "KJV",
    },
    title: "Prince of Peace",
    content: `Jesus is prophesied as the Prince of Peace, whose government and peace will never end. This revelation brings hope and stability in uncertain times.

    His peace isn't temporary or circumstantial but eternal and governmental. He brings order where there's chaos and calm where there's storm.`,
    prayer: `Prince of Peace, rule in my heart today. Bring Your governmental peace to every area of my life and circumstances. Amen.`,
    readingPlan: "Isaiah 9",
    reflection: [
      {
        id: "13-1",
        question: "What area of your life needs the Prince's peace today?",
        placeholder: "Identify specific concerns...",
      },
      {
        id: "13-2",
        question: "How does Jesus' eternal peace comfort you?",
        placeholder: "Reflect on stability...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      reference: "John 17:17",
      defaultVersion: "KJV",
    },
    title: "Sanctified by Truth",
    content: `God's word is truth that sanctifies us. Jesus prayed that we would be set apart through the truth of God's revelation.

    Truth transforms us, making us more like Christ. It cleanses our thinking and aligns our lives with God's purposes.`,
    prayer: `Holy Father, sanctify me through Your truth. Help me to embrace Your word and allow it to transform every area of my life. Amen.`,
    readingPlan: "John 17",
    reflection: [
      {
        id: "14-1",
        question: "How has God's truth transformed your thinking?",
        placeholder: "Describe changed perspectives...",
      },
      {
        id: "14-2",
        question: "What area of your life needs sanctification through truth?",
        placeholder: "Be honest about needed growth...",
      },
      {
        id: "14-3",
        question: "How can you better engage with God's truth daily?",
        placeholder: "Consider practical steps...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      reference: "Romans 5:1",
      defaultVersion: "KJV",
    },
    title: "Peace with God",
    content: `Through faith in Jesus, we have peace with God. This reconciliation is the foundation for all other peace, bringing us into right relationship with our Creator.

    Being at peace with God means the conflict caused by sin is resolved. We can approach Him with confidence and intimacy.`,
    prayer: `Heavenly Father, thank You for peace through Jesus. Help me to live in the reality of this reconciliation every day. Amen.`,
    readingPlan: "Romans 5",
    reflection: [
      {
        id: "15-1",
        question: "How does being at peace with God affect your daily life?",
        placeholder: "Consider your prayer life and choices...",
      },
      {
        id: "15-2",
        question: "What difference does reconciliation make in your identity?",
        placeholder: "Reflect on your standing with God...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      reference: "2 Thessalonians 3:16",
      defaultVersion: "KJV",
    },
    title: "Lord of Peace",
    content: `The Lord of peace Himself gives us peace always and in every way. This revelation reminds us that peace is a Person, not just a feeling.

    Jesus as Lord of Peace means He rules over every circumstance that threatens our peace. We can trust His governance.`,
    prayer: `Lord of Peace, give me Your peace in every situation today. Help me to remember that You reign over all my circumstances. Amen.`,
    readingPlan: "2 Thessalonians 3",
    reflection: [
      {
        id: "16-1",
        question:
          "How does knowing Jesus as Lord of Peace change your perspective?",
        placeholder: "Consider His authority...",
      },
      {
        id: "16-2",
        question:
          "Where do you need to acknowledge Jesus' lordship over your peace?",
        placeholder: "Identify controlling circumstances...",
      },
      {
        id: "16-3",
        question: "How can you cultivate awareness of Jesus' peace today?",
        placeholder: "Think about practical reminders...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      reference: "John 18:37",
      defaultVersion: "KJV",
    },
    title: "Born to Testify to Truth",
    content: `Jesus declared He came into the world to testify to the truth. Everyone who belongs to the truth listens to His voice.

    Jesus' entire mission was revelatory - to show us what truth looks like in human form. His life testifies to God's character and kingdom.`,
    prayer: `Lord Jesus, help me to hear Your voice of truth today. Give me ears to recognize Your testimony about the Father. Amen.`,
    readingPlan: "John 18",
    reflection: [
      {
        id: "17-1",
        question: "How is Jesus testifying to truth in your life currently?",
        placeholder: "Listen for His voice...",
      },
      {
        id: "17-2",
        question:
          "What truth has Jesus revealed through His life and teachings?",
        placeholder: "Consider specific teachings...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      reference: "Colossians 3:15",
      defaultVersion: "KJV",
    },
    title: "Peace as Umpire",
    content: `Let the peace of Christ rule in your hearts. The word "rule" means to act as an umpire, making calls in our decisions and relationships.

    God's peace serves as a guidance system, showing us when we're in His will and when we're not.`,
    prayer: `Prince of Peace, let Your peace rule in my heart today. Guide my decisions and relationships through Your peaceful presence. Amen.`,
    readingPlan: "Colossians 3",
    reflection: [
      {
        id: "18-1",
        question: "What decision needs the umpire of God's peace?",
        placeholder: "Identify a current choice...",
      },
      {
        id: "18-2",
        question: "How has God's peace guided you in past decisions?",
        placeholder: "Recall specific guidance...",
      },
      {
        id: "18-3",
        question: "How can you better listen to peace's guidance?",
        placeholder: "Consider spiritual practices...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      reference: "1 Timothy 2:4-5",
      defaultVersion: "KJV",
    },
    title: "Truth Leading to Salvation",
    content: `God wants all people to be saved and come to knowledge of the truth. There is one mediator between God and humanity - Christ Jesus.

    Salvation comes through understanding and embracing the truth about Jesus. He alone bridges the gap between us and God.`,
    prayer: `Heavenly Father, thank You for providing salvation through Jesus. Help me to grow in knowledge of Your truth and share it with others. Amen.`,
    readingPlan: "1 Timothy 2",
    reflection: [
      {
        id: "19-1",
        question:
          "How has knowing the truth of Jesus brought salvation to you?",
        placeholder: "Share your testimony...",
      },
      {
        id: "19-2",
        question: "Who needs to hear this truth today?",
        placeholder: "Pray for specific people...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      reference: "Hebrews 1:1-2",
      defaultVersion: "KJV",
    },
    title: "Final Revelation",
    content: `In these last days, God has spoken to us by His Son. Jesus is the final and complete revelation of God, superior to all previous revelations.

    Everything God wants to say to humanity, He has said through Jesus. We don't need to look for new revelations beyond Christ.`,
    prayer: `Father, thank You for speaking through Your Son. Help me to listen to Jesus as Your final word and find complete revelation in Him. Amen.`,
    readingPlan: "Hebrews 1",
    reflection: [
      {
        id: "20-1",
        question: "How does knowing Jesus is God's final word bring peace?",
        placeholder: "Consider completeness...",
      },
      {
        id: "20-2",
        question: "What has Jesus revealed that previous revelations didn't?",
        placeholder: "Think about grace, cross, resurrection...",
      },
      {
        id: "20-3",
        question: "How can you better listen to God's voice in Jesus?",
        placeholder: "Consider Gospel reading...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      reference: "Psalm 85:10",
      defaultVersion: "KJV",
    },
    title: "Mercy and Truth Embrace",
    content: `Mercy and truth have met together; righteousness and peace have kissed. This beautiful picture shows how God's attributes work in perfect harmony to bring us salvation.

    God's truth without mercy would condemn us; His mercy without truth would compromise His holiness. In Christ, we see both perfectly united for our redemption.`,
    prayer: `Heavenly Father, thank You for the perfect union of mercy and truth in Jesus. Help me to extend both mercy and truth to others as You have to me. Amen.`,
    readingPlan: "Psalm 85",
    reflection: [
      {
        id: "21-1",
        question: "How have you experienced God's mercy and truth together?",
        placeholder: "Recall specific moments of grace...",
      },
      {
        id: "21-2",
        question: "Where do you need to balance mercy and truth in relationships?",
        placeholder: "Identify specific situations...",
      },
      {
        id: "21-3",
        question: "How does this harmony bring peace to your soul?",
        placeholder: "Reflect on inner peace...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      reference: "Proverbs 3:3",
      defaultVersion: "KJV",
    },
    title: "Bind Truth Around Your Neck",
    content: `Do not let mercy and truth forsake you; bind them around your neck, write them on the tablet of your heart. God's truth should be our constant companion and inner guide.

    When truth becomes part of our identity, it shapes our character and decisions. This internal compass brings peace through consistent godly living.`,
    prayer: `Lord, help me to bind Your truth to my heart today. May it guide my thoughts, words, and actions, bringing peace to my journey. Amen.`,
    readingPlan: "Proverbs 3",
    reflection: [
      {
        id: "22-1",
        question: "How have you made God's truth part of your identity?",
        placeholder: "Consider habits and values...",
      },
      {
        id: "22-2",
        question: "What truth needs to be written on your heart today?",
        placeholder: "Identify needed transformation...",
      },
      {
        id: "22-3",
        question: "How does internalizing truth bring external peace?",
        placeholder: "Reflect on consistency...",
      },
    ],
  },
  {
    id: "23",
    date: getDevotionalDate("23"),
    verse: {
      reference: "John 4:23-24",
      defaultVersion: "KJV",
    },
    title: "Worship in Spirit and Truth",
    content: `The Father seeks worshippers who will worship in spirit and truth. True worship connects with God's reality and responds from our inner being.

    Worship grounded in truth brings peace because we're engaging with God as He truly is, not as we imagine Him to be.`,
    prayer: `Father, teach me to worship You in spirit and truth. May my worship be grounded in Your reality and flow from a sincere heart. Amen.`,
    readingPlan: "John 4",
    reflection: [
      {
        id: "23-1",
        question: "How does truth-based worship differ from emotional worship?",
        placeholder: "Consider depth and stability...",
      },
      {
        id: "23-2",
        question: "What truth about God inspires your worship today?",
        placeholder: "Focus on His character...",
      },
      {
        id: "23-3",
        question: "How has worship brought peace to your circumstances?",
        placeholder: "Recall specific experiences...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      reference: "Ephesians 6:14",
      defaultVersion: "KJV",
    },
    title: "Belt of Truth",
    content: `Stand firm with the belt of truth buckled around your waist. Truth is the foundational piece of spiritual armor that holds everything else together.

    Just as a belt provides stability and readiness, God's truth prepares us for spiritual battles and brings peace through certainty.`,
    prayer: `Lord Jesus, clothe me with Your truth today. Help me to stand firm in Your revelations and experience Your peace in every battle. Amen.`,
    readingPlan: "Ephesians 6:10-18",
    reflection: [
      {
        id: "24-1",
        question: "How has God's truth helped you stand firm recently?",
        placeholder: "Describe a recent challenge...",
      },
      {
        id: "24-2",
        question: "What spiritual battle requires the belt of truth today?",
        placeholder: "Identify current struggles...",
      },
      {
        id: "24-3",
        question: "How does truth bring readiness for spiritual warfare?",
        placeholder: "Consider preparation...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      reference: "2 John 1:3",
      defaultVersion: "KJV",
    },
    title: "Grace, Mercy, and Peace",
    content: `Grace, mercy, and peace will be with us from God the Father and from Jesus Christ, in truth and love. These blessings flow from God's character and are experienced through relationship.

    Truth is the channel through which God's grace, mercy, and peace reach us. Without truth, we would misunderstand these precious gifts.`,
    prayer: `Heavenly Father, thank You for grace, mercy, and peace that come through truth. Help me to receive these gifts fully today. Amen.`,
    readingPlan: "2 John",
    reflection: [
      {
        id: "25-1",
        question: "How have you experienced grace, mercy, and peace together?",
        placeholder: "Share a personal story...",
      },
      {
        id: "25-2",
        question: "Which of these three gifts do you need most today?",
        placeholder: "Be honest about your need...",
      },
      {
        id: "25-3",
        question: "How does truth enhance your appreciation of these gifts?",
        placeholder: "Reflect on understanding...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      reference: "Psalm 25:5",
      defaultVersion: "KJV",
    },
    title: "Lead Me in Your Truth",
    content: `Lead me in Your truth and teach me, for You are the God of my salvation. This prayer acknowledges our need for God's guidance and instruction.

    Following God's truth brings peace because we're walking in the path designed by our loving Creator who knows what's best for us.`,
    prayer: `God of salvation, lead me in Your truth today. Teach me Your ways and guide my steps into the peace of Your perfect will. Amen.`,
    readingPlan: "Psalm 25",
    reflection: [
      {
        id: "26-1",
        question: "Where do you need God's guidance in truth today?",
        placeholder: "Identify decisions or confusion...",
      },
      {
        id: "26-2",
        question: "How has God's leading brought peace in the past?",
        placeholder: "Recall His faithfulness...",
      },
      {
        id: "26-3",
        question: "What makes you willing to follow God's truth?",
        placeholder: "Consider trust and relationship...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      reference: "3 John 1:4",
      defaultVersion: "KJV",
    },
    title: "Walking in Truth",
    content: `I have no greater joy than to hear that my children walk in truth. There's profound joy and peace when we see others living according to God's revelations.

    Walking in truth isn't just intellectual agreement but practical obedience that transforms our lives and relationships.`,
    prayer: `Lord, help me to walk in Your truth today in practical ways. May my life bring joy to You and peace to those around me. Amen.`,
    readingPlan: "3 John",
    reflection: [
      {
        id: "27-1",
        question: "What does 'walking in truth' look like practically?",
        placeholder: "Consider daily actions...",
      },
      {
        id: "27-2",
        question: "How has obedience to truth brought peace?",
        placeholder: "Recall specific obedience...",
      },
      {
        id: "27-3",
        question: "Who inspires you by their walk in truth?",
        placeholder: "Thank God for them...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      reference: "Psalm 86:11",
      defaultVersion: "KJV",
    },
    title: "Unite My Heart to Fear Your Name",
    content: `Teach me Your way, O Lord; I will walk in Your truth; unite my heart to fear Your name. A divided heart finds no peace, but truth brings integration and wholeness.

    When God's truth unites our heart, we experience peace through singular devotion and clear purpose.`,
    prayer: `Lord, unite my heart through Your truth today. Deliver me from divided loyalties and give me peace through wholehearted devotion. Amen.`,
    readingPlan: "Psalm 86",
    reflection: [
      {
        id: "28-1",
        question: "Where is your heart divided today?",
        placeholder: "Identify conflicting desires...",
      },
      {
        id: "28-2",
        question: "How has truth brought unity to your heart previously?",
        placeholder: "Recall integration...",
      },
      {
        id: "28-3",
        question: "What would wholehearted devotion look like for you?",
        placeholder: "Consider practical steps...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      reference: "Zechariah 8:19",
      defaultVersion: "KJV",
    },
    title: "Love Truth and Peace",
    content: `Therefore love truth and peace. This simple command connects our affection for truth with our experience of peace. We cannot have one without the other.

    Loving truth means valuing God's revelations above human opinions. This love naturally produces peace in our souls and relationships.`,
    prayer: `Heavenly Father, give me a love for Your truth and peace. Help me to value what You value and experience the peace that follows. Amen.`,
    readingPlan: "Zechariah 8",
    reflection: [
      {
        id: "29-1",
        question: "How can you cultivate greater love for truth?",
        placeholder: "Consider habits and attitudes...",
      },
      {
        id: "29-2",
        question: "What happens when we love peace more than truth?",
        placeholder: "Reflect on compromise...",
      },
      {
        id: "29-3",
        question: "How does loving truth demonstrate love for God?",
        placeholder: "Consider relationship...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      reference: "Malachi 2:6",
      defaultVersion: "KJV",
    },
    title: "True Instruction Was in His Mouth",
    content: `True instruction was in his mouth, and no wrong was found on his lips. He walked with Me in peace and uprightness. Truth spoken and lived brings peace to the speaker and hearer.

    When our words align with God's truth and our lives match our message, we experience authentic peace and influence others positively.`,
    prayer: `Lord, put true instruction in my mouth today. Help me to walk with You in peace and integrity, bringing glory to Your name. Amen.`,
    readingPlan: "Malachi 2",
    reflection: [
      {
        id: "30-1",
        question: "How do your words reflect God's truth?",
        placeholder: "Evaluate recent conversations...",
      },
      {
        id: "30-2",
        question: "Where do your actions need to align with truth?",
        placeholder: "Identify inconsistencies...",
      },
      {
        id: "30-3",
        question: "How has integrity brought peace to your relationships?",
        placeholder: "Recall specific examples...",
      },
    ],
  },
  {
    id: "31",
    date: getDevotionalDate("31"),
    verse: {
      reference: "Revelation 3:14",
      defaultVersion: "KJV",
    },
    title: "The Amen, The Faithful Witness",
    content: `Jesus is the Amen, the faithful and true witness. As the ultimate affirmation of truth, He confirms all God's promises and reveals the Father's heart perfectly.

    Knowing Jesus as the faithful witness brings peace because we can trust every word He speaks and every promise He makes.`,
    prayer: `Lord Jesus, faithful Witness, help me to trust Your testimony completely. Give me peace through confidence in Your faithful character. Amen.`,
    readingPlan: "Revelation 3:14-22",
    reflection: [
      {
        id: "31-1",
        question: "How has Jesus proven faithful in your life?",
        placeholder: "Recall specific faithfulness...",
      },
      {
        id: "31-2",
        question: "What promise of Jesus brings you peace today?",
        placeholder: "Focus on a specific promise...",
      },
      {
        id: "31-3",
        question: "How does Jesus being 'the Amen' affect your prayers?",
        placeholder: "Consider confidence...",
      },
    ],
  },
];

