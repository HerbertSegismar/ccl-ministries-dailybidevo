import type { Devotional } from "../types";

// Helper function to generate date based on ID
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
      reference: "Proverbs 3:5-6",
      defaultVersion: "KJV",
    },
    title: "Trust in the Lord",
    content: `Trusting God completely requires surrendering our limited understanding. These verses remind us that divine guidance follows our wholehearted trust. The promise of God directing our paths isn't about passive waiting but active faith-filled living.

    True trust acknowledges God's sovereignty in every aspect of life - relationships, decisions, and uncertainties. When we lean on His understanding rather than our own, we align ourselves with His perfect will.

    Where are you relying on human understanding instead of divine wisdom? How might your decisions change if you fully trusted God's guidance?`,
    prayer: `Heavenly Father, help me to trust You with all my heart today. When I'm tempted to rely on my own understanding, remind me of Your infinite wisdom. Direct my paths and make my ways pleasing to You. In Jesus' name, Amen.`,
    readingPlan: "Proverbs 3-4",
    reflection: [
      {
        id: "1-1",
        question:
          "What area of your life is most difficult to surrender to God's wisdom?",
        placeholder: "Identify specific situations or concerns...",
      },
      {
        id: "1-2",
        question:
          "How has God proven faithful in your past when you trusted Him?",
        placeholder: "Recall specific examples of God's faithfulness...",
      },
      {
        id: "1-3",
        question:
          "What practical step will you take to demonstrate trust in God this week?",
        placeholder: "e.g., praying before deciding, seeking godly counsel...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      reference: "Matthew 11:28",
      defaultVersion: "KJV",
    },
    title: "Rest for the Weary",
    content: `Jesus invites all who labor under life's heavy burdens to find rest in Him. This isn't merely physical rest but soul-deep restoration that comes through relationship with Him. 
    
    His yoke is easy because He bears the weight with us, and His burden is light because it's fueled by grace rather than performance.`,
    prayer: `Lord Jesus, I come to You today weary and heavy-laden. Teach me to take Your yoke upon me and find rest for my soul. Help me to learn from Your gentle and humble heart. Amen.`,
    readingPlan: "Matthew 11-12",
    reflection: [
      {
        id: "2-1",
        question:
          "What burdens are you carrying that Jesus wants to help you bear?",
        placeholder: "List your specific burdens and concerns...",
      },
      {
        id: "2-2",
        question:
          "How does Jesus' example of gentleness and humility challenge you?",
        placeholder: "Consider areas where you need more gentleness...",
      },
    ],
  },
  {
    id: "3",
    date: getDevotionalDate("3"),
    verse: {
      reference: "Isaiah 40:31",
      defaultVersion: "KJV",
    },
    title: "Renewed Strength",
    content: `Those who wait upon the Lord will find new strength to soar above life's challenges. This waiting isn't passive but active expectation of God's faithfulness.`,
    prayer: `Father, teach me to wait upon You with hopeful expectation. Renew my strength when I feel weary and help me to soar on wings like eagles. Amen.`,
    readingPlan: "Isaiah 40-41",
    reflection: [
      {
        id: "3-1",
        question:
          "What does waiting on the Lord look like in your current season?",
        placeholder: "Describe your practice of waiting...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      reference: "Philippians 4:6-7",
      defaultVersion: "KJV",
    },
    title: "Peace Beyond Understanding",
    content: `God's peace stands guard over our hearts and minds when we choose prayer over anxiety. This supernatural peace transcends human comprehension and circumstances.`,
    prayer: `Lord, teach me to bring every concern to You in prayer. Guard my heart and mind with Your perfect peace that surpasses all understanding. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "4-1",
        question:
          "What concerns do you need to surrender to God in prayer today?",
        placeholder: "List your specific anxieties...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      reference: "Joshua 1:9",
      defaultVersion: "KJV",
    },
    title: "Be Strong and Courageous",
    content: `God's command to be strong and courageous comes with the promise of His constant presence. Our courage is rooted in His faithfulness, not our capabilities.`,
    prayer: `Heavenly Father, help me to be strong and courageous today. Remind me of Your constant presence in every situation I face. Amen.`,
    readingPlan: "Joshua 1-2",
    reflection: [
      {
        id: "5-1",
        question: "Where do you need God's courage in your life right now?",
        placeholder: "Identify areas of fear or hesitation...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      reference: "Romans 8:28",
      defaultVersion: "KJV",
    },
    title: "All Things Work Together",
    content: `God's sovereignty ensures that even difficult circumstances work for our good when we love Him. This doesn't mean all things are good, but that God works through all things.`,
    prayer: `God, help me to trust that You are working all things together for my good. Strengthen my faith during challenging times. Amen.`,
    readingPlan: "Romans 8",
    reflection: [
      {
        id: "6-1",
        question:
          "How have you seen God work difficult situations for good in your past?",
        placeholder: "Recall specific examples...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      reference: "2 Corinthians 12:9",
      defaultVersion: "KJV",
    },
    title: "Grace Sufficient",
    content: `God's grace is most evident in our weakness. His power is perfected in our dependence rather than our self-sufficiency.`,
    prayer: `Lord, thank You that Your grace is sufficient for me. Help me to boast in my weaknesses that Christ's power may rest upon me. Amen.`,
    readingPlan: "2 Corinthians 12",
    reflection: [
      {
        id: "7-1",
        question:
          "Where do you need to experience God's sufficient grace today?",
        placeholder: "Identify areas of weakness or struggle...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      reference: "Psalm 23:1",
      defaultVersion: "KJV",
    },
    title: "The Lord is My Shepherd",
    content: `As our Shepherd, God provides, guides, and protects. We lack nothing when we follow His lead and trust His care.`,
    prayer: `Shepherd of my soul, thank You for Your faithful provision. Help me to follow Your guidance and rest in Your protection. Amen.`,
    readingPlan: "Psalm 23-24",
    reflection: [
      {
        id: "8-1",
        question: "How have you experienced God's shepherding in your life?",
        placeholder: "Describe His provision and care...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      reference: "John 16:33",
      defaultVersion: "KJV",
    },
    title: "Overcoming Peace",
    content: `Jesus offers peace in the midst of trouble, not freedom from trouble. His victory over the world gives us courage to face life's challenges.`,
    prayer: `Prince of Peace, help me to find peace in You despite life's troubles. Remind me that You have overcome the world. Amen.`,
    readingPlan: "John 16-17",
    reflection: [
      {
        id: "9-1",
        question:
          "How can Jesus' victory give you peace in your current struggles?",
        placeholder: "Connect His victory to your situation...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      reference: "Hebrews 11:1",
      defaultVersion: "KJV",
    },
    title: "Substance of Faith",
    content: `Faith gives substance to our hopes and evidence to unseen realities. It's the foundation of our relationship with God and the basis for our eternal perspective.`,
    prayer: `Father, strengthen my faith today. Help me to see with spiritual eyes and trust in Your unseen realities. Amen.`,
    readingPlan: "Hebrews 11",
    reflection: [
      {
        id: "10-1",
        question: "What unseen reality do you need to trust God for today?",
        placeholder: "Name your specific faith challenge...",
      },
      {
        id: "10-2",
        question: "How has God proven faithful in your past experiences?",
        placeholder: "Recall specific examples of God's faithfulness...",
      },
      {
        id: "10-3",
        question: "What step of faith is God asking you to take this week?",
        placeholder: "Identify a specific action of obedience...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      reference: "Psalm 119:105",
      defaultVersion: "KJV",
    },
    title: "Light to My Path",
    content: `God's Word serves as a lamp to guide our steps and a light for our path. In times of uncertainty and darkness, Scripture provides clarity and direction.`,
    prayer: `Heavenly Father, thank You for Your Word that illuminates my path. Help me to hide it in my heart that I might not sin against You. Amen.`,
    readingPlan: "Psalm 119:105-112",
    reflection: [
      {
        id: "11-1",
        question: "How has God's Word guided you in a recent decision?",
        placeholder: "Describe a specific situation...",
      },
      {
        id: "11-2",
        question:
          "What area of your life needs the light of God's direction right now?",
        placeholder: "Identify areas of confusion or uncertainty...",
      },
      {
        id: "11-3",
        question:
          "How can you prioritize Scripture reading in your daily routine?",
        placeholder: "Think of practical ways to engage with the Bible...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      reference: "1 Corinthians 10:13",
      defaultVersion: "KJV",
    },
    title: "God's Faithfulness in Temptation",
    content: `God promises that no temptation will overcome us without providing a way of escape. His faithfulness extends to helping us in our moments of weakness.`,
    prayer: `Lord, thank You for Your faithfulness in providing escape from temptation. Help me to recognize Your way out when tested. Amen.`,
    readingPlan: "1 Corinthians 10",
    reflection: [
      {
        id: "12-1",
        question: "What temptation do you need God's help with today?",
        placeholder: "Identify areas of struggle...",
      },
      {
        id: "12-2",
        question:
          "How have you experienced God's faithfulness in past temptations?",
        placeholder: "Recall specific instances of God's help...",
      },
      {
        id: "12-3",
        question:
          "What practical steps can you take to avoid tempting situations?",
        placeholder: "Think about boundaries or accountability...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      reference: "Galatians 5:22-23",
      defaultVersion: "KJV",
    },
    title: "Fruit of the Spirit",
    content: `The Holy Spirit produces spiritual fruit in believers' lives as we remain connected to Christ. These qualities reflect God's character to the world.`,
    prayer: `Holy Spirit, produce Your fruit in my life. Help me to abide in Christ so that His character may be evident through me. Amen.`,
    readingPlan: "Galatians 5",
    reflection: [
      {
        id: "13-1",
        question:
          "Which fruit of the Spirit do you need most in your life right now?",
        placeholder: "Select one and explain why...",
      },
      {
        id: "13-2",
        question:
          "How can you cultivate this fruit through spiritual disciplines?",
        placeholder: "Consider prayer, meditation, obedience...",
      },
      {
        id: "13-3",
        question:
          "Who in your life exemplifies this fruit well, and what can you learn from them?",
        placeholder: "Identify a role model and their qualities...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      reference: "Ephesians 6:10-11",
      defaultVersion: "KJV",
    },
    title: "The Armor of God",
    content: `God provides spiritual armor to stand against the enemy's schemes. Each piece represents a different aspect of our spiritual defense and offense.`,
    prayer: `Heavenly Father, help me to put on the full armor of God daily. Teach me to stand firm against spiritual attacks. Amen.`,
    readingPlan: "Ephesians 6:10-18",
    reflection: [
      {
        id: "14-1",
        question: "Which piece of spiritual armor do you need to strengthen?",
        placeholder: "Identify and explain...",
      },
      {
        id: "14-2",
        question: "How can you practically 'put on' this piece of armor daily?",
        placeholder: "Think about specific prayers or practices...",
      },
      {
        id: "14-3",
        question: "When have you experienced the protection of God's armor?",
        placeholder: "Recall a specific spiritual battle...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      reference: "James 1:2-3",
      defaultVersion: "KJV",
    },
    title: "Joy in Trials",
    content: `God calls us to consider trials as opportunities for joy because they produce perseverance and maturity in our faith.`,
    prayer: `Lord, give me Your perspective on the trials I face. Help me to see them as opportunities for growth rather than obstacles. Amen.`,
    readingPlan: "James 1",
    reflection: [
      {
        id: "15-1",
        question: "How can you change your perspective on a current challenge?",
        placeholder: "Reframe your thinking...",
      },
      {
        id: "15-2",
        question: "What has God taught you through past difficulties?",
        placeholder: "Recall lessons from previous trials...",
      },
      {
        id: "15-3",
        question: "How can you support others who are facing similar trials?",
        placeholder: "Think about practical encouragement...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      reference: "1 Peter 5:7",
      defaultVersion: "KJV",
    },
    title: "Casting All Cares",
    content: `God invites us to cast all our anxieties on Him because He cares for us deeply. We don't have to carry our burdens alone.`,
    prayer: `Heavenly Father, I cast all my cares upon You today. Thank You for caring about every detail of my life. Amen.`,
    readingPlan: "1 Peter 5",
    reflection: [
      {
        id: "16-1",
        question: "What anxiety do you need to surrender to God today?",
        placeholder: "Name your specific concern...",
      },
      {
        id: "16-2",
        question:
          "How does knowing God cares for you personally change your approach to worries?",
        placeholder: "Reflect on God's personal care...",
      },
      {
        id: "16-3",
        question: "What practical reminder can you use when anxieties arise?",
        placeholder: "Consider Scripture, prayer, or worship...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      reference: "1 John 4:18",
      defaultVersion: "KJV",
    },
    title: "Perfect Love Casts Out Fear",
    content: `God's perfect love drives out fear from our lives. As we grow in understanding His love, fear loses its power over us.`,
    prayer: `Lord, help me to comprehend the depth of Your perfect love. Drive fear from my heart as I trust in You. Amen.`,
    readingPlan: "1 John 4",
    reflection: [
      {
        id: "17-1",
        question: "What fear do you need God's perfect love to overcome?",
        placeholder: "Identify your fear...",
      },
      {
        id: "17-2",
        question:
          "How has experiencing God's love helped you overcome fear in the past?",
        placeholder: "Recall a specific example...",
      },
      {
        id: "17-3",
        question: "How can you meditate on God's love throughout your day?",
        placeholder: "Think about reminders or practices...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      reference: "Revelation 21:4",
      defaultVersion: "KJV",
    },
    title: "No More Tears",
    content: `God promises a future where He will wipe away every tear. This hope sustains us through present sorrows and difficulties.`,
    prayer: `Heavenly Father, thank You for the hope of eternity with You. Comfort me in my sorrows with the promise of Your future restoration. Amen.`,
    readingPlan: "Revelation 21",
    reflection: [
      {
        id: "18-1",
        question:
          "How does the hope of eternity comfort you in current struggles?",
        placeholder: "Connect eternal hope to present reality...",
      },
      {
        id: "18-2",
        question:
          "What earthly sorrows do you most look forward to leaving behind?",
        placeholder: "Identify specific pains or struggles...",
      },
      {
        id: "18-3",
        question: "How can you encourage others with this hope of eternity?",
        placeholder: "Think about ways to share this comfort...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      reference: "Colossians 3:23",
      defaultVersion: "KJV",
    },
    title: "Working for the Lord",
    content: `Whatever we do, we're called to work heartily as for the Lord rather than for people. This perspective transforms ordinary tasks into worship.`,
    prayer: `Lord, help me to work with all my heart as unto You. Transform my attitude toward daily tasks as acts of worship. Amen.`,
    readingPlan: "Colossians 3",
    reflection: [
      {
        id: "19-1",
        question: "How can you change your perspective on your daily work?",
        placeholder: "Think of work as worship...",
      },
      {
        id: "19-2",
        question: "What mundane task could become worship if offered to God?",
        placeholder: "Identify a specific routine activity...",
      },
      {
        id: "19-3",
        question:
          "How does working for the Lord rather than people change your motivation?",
        placeholder: "Reflect on different motivations...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      reference: "2 Timothy 1:7",
      defaultVersion: "KJV",
    },
    title: "Spirit of Power, Love, and Sound Mind",
    content: `God has given us a spirit of power, love, and self-discipline, not fear. We can live confidently through the Holy Spirit's work in us.`,
    prayer: `Holy Spirit, help me to walk in the power, love, and sound mind You've given me. Drive out fear and timidity from my life. Amen.`,
    readingPlan: "2 Timothy 1",
    reflection: [
      {
        id: "20-1",
        question: "How can you exercise the spirit of power God has given you?",
        placeholder: "Identify areas to step out in faith...",
      },
      {
        id: "20-2",
        question:
          "In what situations do you need to rely more on God's love than your own abilities?",
        placeholder: "Identify relationship challenges...",
      },
      {
        id: "20-3",
        question:
          "How can you cultivate a sound mind through spiritual practices?",
        placeholder: "Consider prayer, meditation on Scripture...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      reference: "John 14:6",
      defaultVersion: "KJV",
    },
    title: "The Way, The Truth, The Life",
    content: `Jesus declares Himself as the only way to the Father. In a world of many paths, this exclusive claim reminds us of the centrality of Christ in salvation.`,
    prayer: `Lord Jesus, thank You for being the way to the Father. Help me to follow You faithfully and share this truth with others. Amen.`,
    readingPlan: "John 14",
    reflection: [
      {
        id: "21-1",
        question:
          "How does Jesus being 'the way' influence your daily decisions?",
        placeholder: "Consider your priorities and choices...",
      },
      {
        id: "21-2",
        question:
          "What does it mean to you that Jesus is the truth in a world of relativism?",
        placeholder: "Reflect on absolute truth vs. cultural trends...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      reference: "Romans 12:1-2",
      defaultVersion: "KJV",
    },
    title: "Living Sacrifice",
    content: `Paul urges believers to offer themselves as living sacrifices, holy and pleasing to God. This involves a transformation through renewed thinking.`,
    prayer: `Heavenly Father, I offer myself as a living sacrifice today. Transform my mind to discern and follow Your perfect will. Amen.`,
    readingPlan: "Romans 12",
    reflection: [
      {
        id: "22-1",
        question:
          "What areas of your life need to be more fully surrendered to God?",
        placeholder: "Identify specific areas of resistance...",
      },
      {
        id: "22-2",
        question:
          "How is God renewing your mind to better understand His will?",
        placeholder: "Describe changes in perspective...",
      },
    ],
  },
  {
    id: "23",
    date: getDevotionalDate("23"),
    verse: {
      reference: "Psalm 100:4",
      defaultVersion: "KJV",
    },
    title: "Enter with Thanksgiving",
    content: `We are called to enter God's presence with thanksgiving and praise. Gratitude opens our hearts to experience more of God's goodness.`,
    prayer: `Lord, teach me to approach You with thanksgiving in my heart. Help me to remember Your faithfulness in all circumstances. Amen.`,
    readingPlan: "Psalm 100-101",
    reflection: [
      {
        id: "23-1",
        question: "What specific blessings can you thank God for today?",
        placeholder: "List both big and small blessings...",
      },
      {
        id: "23-2",
        question: "How does gratitude change your perspective on challenges?",
        placeholder: "Connect thankfulness to outlook...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      reference: "Hebrews 4:16",
      defaultVersion: "KJV",
    },
    title: "Throne of Grace",
    content: `We can approach God's throne of grace with confidence to receive mercy and help in time of need. Jesus our High Priest makes this access possible.`,
    prayer: `Heavenly Father, thank You for providing access to Your throne of grace. Help me to come boldly to receive Your mercy. Amen.`,
    readingPlan: "Hebrews 4",
    reflection: [
      {
        id: "24-1",
        question:
          "What need do you need to bring before God's throne of grace today?",
        placeholder: "Identify your specific need...",
      },
      {
        id: "24-2",
        question:
          "How does knowing you have access to God's throne change your prayer life?",
        placeholder: "Reflect on confidence in prayer...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      reference: "2 Peter 1:5-7",
      defaultVersion: "KJV",
    },
    title: "Adding to Your Faith",
    content: `Peter outlines the process of spiritual growth - adding virtue to faith, knowledge to virtue, and so on. Spiritual maturity requires intentional development.`,
    prayer: `Lord, help me to diligently add these qualities to my faith. Grow me into spiritual maturity for Your glory. Amen.`,
    readingPlan: "2 Peter 1",
    reflection: [
      {
        id: "25-1",
        question:
          "Which spiritual quality do you most need to develop right now?",
        placeholder: "Choose from the list in 2 Peter 1:5-7...",
      },
      {
        id: "25-2",
        question: "What practical step can you take to grow in this area?",
        placeholder: "Identify a specific action...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      reference: "1 Thessalonians 5:16-18",
      defaultVersion: "KJV",
    },
    title: "Rejoice, Pray, Give Thanks",
    content: `Paul gives three concise commands: rejoice always, pray continually, give thanks in all circumstances. These practices transform our perspective regardless of situation.`,
    prayer: `Heavenly Father, teach me to rejoice always, pray continually, and give thanks in all circumstances. Transform my heart through these disciplines. Amen.`,
    readingPlan: "1 Thessalonians 5",
    reflection: [
      {
        id: "26-1",
        question: "Which of these three commands is most challenging for you?",
        placeholder: "Be honest about your struggle...",
      },
      {
        id: "26-2",
        question:
          "How can you incorporate these practices more intentionally into your day?",
        placeholder: "Think of practical applications...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      reference: "Matthew 5:14-16",
      defaultVersion: "KJV",
    },
    title: "Light of the World",
    content: `Jesus calls His followers the light of the world. Our lives should shine brightly so others see our good works and glorify our Father in heaven.`,
    prayer: `Lord Jesus, help me to shine as Your light in this world. May my life point others to You and bring glory to the Father. Amen.`,
    readingPlan: "Matthew 5:13-20",
    reflection: [
      {
        id: "27-1",
        question:
          "How can you let your light shine more brightly in your daily contexts?",
        placeholder: "Consider home, work, community...",
      },
      {
        id: "27-2",
        question: "What might be hindering your light from shining fully?",
        placeholder: "Identify obstacles or hindrances...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      reference: "Galatians 2:20",
      defaultVersion: "KJV",
    },
    title: "Crucified with Christ",
    content: `Paul declares that he has been crucified with Christ and now Christ lives in him. This represents the exchanged life - our life for His.`,
    prayer: `Heavenly Father, I thank You that I have been crucified with Christ. Help me to live by faith in the Son of God who loved me. Amen.`,
    readingPlan: "Galatians 2",
    reflection: [
      {
        id: "28-1",
        question:
          "What does it mean practically to be 'crucified with Christ'?",
        placeholder: "Consider daily surrender...",
      },
      {
        id: "28-2",
        question: "How does Christ living in you change your identity?",
        placeholder: "Reflect on your new nature in Christ...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      reference: "Psalm 139:23-24",
      defaultVersion: "KJV",
    },
    title: "Search Me, O God",
    content: `David invites God to search his heart and reveal any offensive ways. This prayer requires vulnerability and a desire for holiness.`,
    prayer: `Search me, O God, and know my heart. Test me and know my anxious thoughts. See if there is any offensive way in me and lead me in the way everlasting. Amen.`,
    readingPlan: "Psalm 139",
    reflection: [
      {
        id: "29-1",
        question: "What might God reveal if He searched your heart today?",
        placeholder: "Be honest and reflective...",
      },
      {
        id: "29-2",
        question:
          "How can you cultivate a heart that welcomes God's searching?",
        placeholder: "Consider practices of examination...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      reference: "James 4:7-8",
      defaultVersion: "KJV",
    },
    title: "Resist the Devil",
    content: `James gives clear instructions: submit to God, resist the devil, and he will flee. Then draw near to God and He will draw near to you.`,
    prayer: `Heavenly Father, help me to submit to You fully and resist the devil's schemes. Draw near to me as I draw near to You. Amen.`,
    readingPlan: "James 4",
    reflection: [
      {
        id: "30-1",
        question:
          "What does it look like to practically resist the devil in your life?",
        placeholder: "Think about specific strategies...",
      },
      {
        id: "30-2",
        question: "How can you draw nearer to God today?",
        placeholder: "Identify specific practices...",
      },
    ],
  },
  {
    id: "31",
    date: getDevotionalDate("31"),
    verse: {
      reference: "Revelation 3:20",
      defaultVersion: "KJV",
    },
    title: "Behold, I Stand at the Door",
    content: `Jesus stands at the door of our hearts and knocks. He invites intimate fellowship with all who will open to Him.`,
    prayer: `Lord Jesus, I open the door of my heart to You. Come in and fellowship with me. Transform me through Your presence. Amen.`,
    readingPlan: "Revelation 3",
    reflection: [
      {
        id: "31-1",
        question:
          "What might be keeping you from fully opening every area of your heart to Jesus?",
        placeholder: "Identify barriers or reservations...",
      },
      {
        id: "31-2",
        question: "How has fellowship with Christ transformed your life?",
        placeholder: "Share specific changes...",
      },
    ],
  },
];
