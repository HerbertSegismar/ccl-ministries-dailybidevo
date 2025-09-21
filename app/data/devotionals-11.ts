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
      reference: "Psalm 46:10",
      defaultVersion: "KJV",
    },
    title: "Be Still and Know",
    content: `In our fast-paced world, stillness often feels counterintuitive. We're conditioned to constantly move, produce, and respond. Yet God invites us into a radical act of trust: to be still. This isn't passive inactivity but an active surrender to God's sovereignty.

    This command comes in the context of chaos - mountains shaking, waters roaring, nations raging. In the midst of turmoil, God reveals Himself as our ultimate refuge and strength. Being still means consciously ceasing our striving and acknowledging that He is God - supreme, sovereign, and sufficient.

    What would it look like today to intentionally create space for stillness before God? How might this practice change your perspective on current challenges?`,
    prayer: `Almighty God, in a world of noise and hurry, teach me the sacred discipline of stillness. Help me to cease my striving and remember that you are God. Quiet my heart before you that I might know you more deeply and trust you more fully. Amen.`,
    readingPlan: "Psalm 46-47",
    reflection: [
      {
        id: "1-1",
        question:
          "What makes it difficult for you to be spiritually/emotionally still before God?",
        placeholder: "Identify specific distractions or resistances...",
      },
      {
        id: "1-2",
        question:
          "How does acknowledging God's sovereignty change your perspective on a current challenge?",
        placeholder: "Describe the shift in thinking...",
      },
      {
        id: "1-3",
        question:
          "What practical step can you take this week to create space for stillness with God?",
        placeholder: "e.g., 5 minutes of silent prayer, a tech-free walk...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      reference: "Proverbs 3:5-6",
      defaultVersion: "KJV",
    },
    title: "Trust in the Lord",
    content: `Trusting God completely requires surrendering our limited understanding. These verses invite us to lean not on our own perception but to acknowledge God in all our ways. True trust is demonstrated in our willingness to submit every decision, every plan, and every dream to His guidance.

    When we acknowledge Him in all our ways, He promises to make our paths straight. This doesn't mean absence of challenges, but rather alignment with His perfect will. His direction often comes step by step, requiring ongoing dependence rather than a one-time consultation.

    Where are you currently relying on your own understanding rather than seeking God's wisdom? How can you practice acknowledging Him in your daily decisions this week?`,
    prayer: `Heavenly Father, help me to trust thee with all my heart and lean not unto mine own understanding. In all my ways, help me to acknowledge thee, and direct my paths according to thy perfect will. Amen.`,
    readingPlan: "Proverbs 3-4",
    reflection: [
      {
        id: "2-1",
        question:
          "In what area of your life is it hardest to trust God completely?",
        placeholder: "Be specific about your struggles...",
      },
      {
        id: "2-2",
        question:
          "How has God directed your path when you've trusted Him in the past?",
        placeholder: "Recall a specific example...",
      },
      {
        id: "2-3",
        question:
          "What practical step will you take this week to acknowledge God in your decisions?",
        placeholder: "e.g., prayer before decisions, seeking godly counsel...",
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
    content: `Waiting on the Lord is an active, expectant posture of faith. Those who wait upon God are promised renewed strength - the ability to mount up with wings as eagles, to run without weariness, and to walk without fainting.

    This promise isn't for those who never grow tired, but for those who turn to God in their weariness. The eagle's wings remind us of God's empowering presence that lifts us above our circumstances. His strength is made perfect in our weakness.

    What areas of your life feel weary right now? How might waiting on God change your perspective and renew your strength?`,
    prayer: `Lord God, when I am weary and faint, teach me to wait upon thee. Renew my strength according to thy promise, that I might soar above my circumstances and persevere in the path you've set before me. Amen.`,
    readingPlan: "Isaiah 40-41",
    reflection: [
      {
        id: "3-1",
        question:
          "In what area of your life do you need God's renewed strength most right now?",
        placeholder: "Be honest about your weariness...",
      },
      {
        id: "3-2",
        question:
          "What does 'waiting on the Lord' practically look like in your current situation?",
        placeholder: "Describe what this active waiting involves...",
      },
      {
        id: "3-3",
        question:
          "How have you experienced God's strength in past times of weakness?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      reference: "Matthew 11:28",
      defaultVersion: "KJV",
    },
    title: "Come Unto Me",
    content: `Jesus extends a personal invitation to all who labor and are heavy laden. He doesn't offer a temporary fix but a transfer of burdens - our weariness for His rest. This rest is found in taking His yoke upon us, which means submitting to His guidance and direction.

    The yoke was a wooden frame joining two animals together for work. When we take Christ's yoke, we join ourselves to Him, learning from His gentleness and humility. His burden is light because He bears it with us.

    What burdens are you carrying that Jesus invites you to exchange for His rest? How might surrendering to His yoke change your daily life?`,
    prayer: `Lord Jesus, I come to thee weary and heavy laden. I accept thy invitation to take thy yoke upon me and learn of thee. Give me rest for my soul and help me to walk in the lightness of thy burden. Amen.`,
    readingPlan: "Matthew 11-12",
    reflection: [
      {
        id: "4-1",
        question:
          "What burdens are you currently carrying that you need to bring to Jesus?",
        placeholder: "Name them specifically...",
      },
      {
        id: "4-2",
        question:
          "What does taking Christ's yoke upon you look like in practical terms?",
        placeholder: "Describe what submission to Jesus means daily...",
      },
      {
        id: "4-3",
        question:
          "How have you experienced Christ's rest in past seasons of weariness?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      reference: "Philippians 4:6-7",
      defaultVersion: "KJV",
    },
    title: "Peace That Passes Understanding",
    content: `Anxiety is a natural human response, but God offers a supernatural alternative. Instead of being anxious, we're invited to bring everything to God in prayer - with thanksgiving. This transforms our perspective and invites God's peace to guard our hearts and minds.

    This peace transcends human understanding because it doesn't depend on circumstances changing. It's a garrison peace that stands guard over our inner being, protecting us from the assaults of worry and fear.

    What anxieties are you currently facing? How might bringing them to God with thanksgiving change your perspective?`,
    prayer: `Heavenly Father, when anxiety rises in my heart, help me to bring my concerns to thee with thanksgiving. Guard my heart and mind with the peace that passes all understanding through Christ Jesus. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "5-1",
        question:
          "What specific concerns tend to generate anxiety in your life?",
        placeholder: "Identify your anxiety triggers...",
      },
      {
        id: "5-2",
        question:
          "How does incorporating thanksgiving change your perspective in prayer?",
        placeholder: "Describe the shift that occurs...",
      },
      {
        id: "5-3",
        question:
          "When have you experienced God's peace in a situation that normally would cause anxiety?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      reference: "Joshua 1:9",
      defaultVersion: "KJV",
    },
    title: "Be Strong and Courageous",
    content: `God's command to be strong and courageous comes with a promise: "I will be with thee." Our courage isn't rooted in our own abilities but in God's faithful presence. He calls us to move forward in obedience despite our fears.

    This command was given to Joshua as he faced the daunting task of leading Israel into the Promised Land. Like Joshua, we're called to courage not because circumstances are easy, but because God is with us in the challenge.

    What daunting task or challenge are you facing that requires God's strength and courage? How does His promise to be with you change your perspective?`,
    prayer: `Almighty God, when I am afraid and discouraged, remind me of thy presence. Help me to be strong and of good courage, not trusting in my own strength but in thy faithful promise to be with me. Amen.`,
    readingPlan: "Joshua 1-2",
    reflection: [
      {
        id: "6-1",
        question: "What situation in your life currently requires courage?",
        placeholder: "Identify the specific challenge...",
      },
      {
        id: "6-2",
        question:
          "How does remembering God's presence help you face difficult circumstances?",
        placeholder: "Describe the difference it makes...",
      },
      {
        id: "6-3",
        question:
          "When have you experienced God's faithfulness in a past situation that required courage?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      reference: "Romans 8:28",
      defaultVersion: "KJV",
    },
    title: "All Things Work Together",
    content: `This profound promise doesn't say that all things are good, but that God works in all things - both good and bad - for the good of those who love Him. His sovereignty extends over every circumstance, weaving even our struggles into His redemptive purposes.

    This doesn't minimize pain or difficulty, but it does provide eternal perspective. God's definition of "good" ultimately means conforming us to the image of Christ and fulfilling His purposes in our lives.

    What difficult circumstance are you facing that you need to trust God is working for your good? How might this perspective change how you approach this situation?`,
    prayer: `Heavenly Father, help me to trust that thou workest all things together for good to them that love thee. When I cannot see thy purpose, give me faith to believe in thy sovereign goodness. Amen.`,
    readingPlan: "Romans 8",
    reflection: [
      {
        id: "7-1",
        question:
          "What difficult circumstance do you need to trust God is working for your good?",
        placeholder: "Be specific about your struggle...",
      },
      {
        id: "7-2",
        question:
          "How does this promise change your perspective on suffering and difficulty?",
        placeholder: "Describe the shift in understanding...",
      },
      {
        id: "7-3",
        question:
          "When have you seen God bring good out of a difficult situation in the past?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      reference: "2 Corinthians 12:9",
      defaultVersion: "KJV",
    },
    title: "Strength in Weakness",
    content: `God's power is made perfect in our weakness. When we feel insufficient, inadequate, or overwhelmed, we become vessels for His sufficient grace. Our weakness becomes the platform for His strength to be displayed.

    Paul discovered that his "thorn in the flesh" - whatever it was - became the means through which he experienced Christ's power most profoundly. Rather than removing the difficulty, God provided grace sufficient to endure it triumphantly.

    Where do you feel weak or inadequate? How might God want to demonstrate His strength through your weakness?`,
    prayer: `Lord Jesus, I bring my weaknesses and inadequacies to thee. May thy strength be made perfect in my weakness, and thy grace prove sufficient for all my needs. Amen.`,
    readingPlan: "2 Corinthians 12",
    reflection: [
      {
        id: "8-1",
        question:
          "In what area of your life do you feel most weak or inadequate?",
        placeholder: "Be honest about your limitations...",
      },
      {
        id: "8-2",
        question:
          "How might God want to use your weakness to display His strength?",
        placeholder: "Consider the possibilities...",
      },
      {
        id: "8-3",
        question:
          "When have you experienced God's strength in a area of past weakness?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      reference: "Psalm 23:1",
      defaultVersion: "KJV",
    },
    title: "The Lord Is My Shepherd",
    content: `David's profound declaration reveals an intimate relationship with God as caregiver, guide, and protector. As our Shepherd, God provides for our needs, leads us in right paths, and protects us from danger.

    The shepherd-sheep relationship requires trust and responsiveness from the sheep. We must learn to recognize our Shepherd's voice and follow where He leads, even when the path seems uncertain.

    How does viewing God as your Shepherd change your perspective on your needs and circumstances? What does it mean to lack nothing when the Lord is your Shepherd?`,
    prayer: `Lord, my Shepherd, thank thee that I shall not want. Help me to trust thy provision, follow thy guidance, and rest in thy protection. Teach me to know thy voice and follow thee faithfully. Amen.`,
    readingPlan: "Psalm 23-24",
    reflection: [
      {
        id: "9-1",
        question:
          "What need or want do you need to trust your Shepherd to provide?",
        placeholder: "Name it specifically...",
      },
      {
        id: "9-2",
        question:
          "How does knowing God as your Shepherd change your perspective on your circumstances?",
        placeholder: "Describe the difference it makes...",
      },
      {
        id: "9-3",
        question:
          "How have you experienced God's shepherding care in the past?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      reference: "John 15:5",
      defaultVersion: "KJV",
    },
    title: "Abiding in the Vine",
    content: `Jesus uses the vivid metaphor of a vine and branches to illustrate our complete dependence on Him. Apart from Him, we can do nothing of eternal value. Abiding in Christ means maintaining vital connection through prayer, obedience, and feeding on His Word.

    The branch doesn't strive to produce fruit; it simply remains connected to the vine, and fruitfulness becomes the natural outcome. Our role is to abide; God's role is to produce fruit through us.

    What does abiding in Christ look like in your daily life? How might you cultivate a deeper connection with the Vine this week?`,
    prayer: `Lord Jesus, the true Vine, help me to abide in thee that I might bear much fruit. Teach me what it means to remain in vital connection with thee through prayer, obedience, and thy Word. Amen.`,
    readingPlan: "John 15",
    reflection: [
      {
        id: "10-1",
        question:
          "What practices help you maintain connection with Christ throughout your day?",
        placeholder: "Identify your spiritual disciplines...",
      },
      {
        id: "10-2",
        question:
          "What fruit is God producing in your life as you abide in Him?",
        placeholder: "Consider love, joy, peace, patience, etc...",
      },
      {
        id: "10-3",
        question:
          "What distraction might be hindering your abiding in Christ that needs to be addressed?",
        placeholder: "Name the specific hindrance...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      reference: "1 Peter 5:7",
      defaultVersion: "KJV",
    },
    title: "Casting All Your Care",
    content: `God invites us to cast all our cares upon Him because He cares for us. The word "cast" implies a deliberate, forceful throwing - not a casual placing. This requires active trust, consciously transferring our burdens from our shoulders to God's.

    We serve a God who is not distant or disinterested but deeply cares for us personally. His care isn't general but specific - encompassing every anxiety, worry, and concern we carry.

    What cares do you need to deliberately cast upon God today? How does knowing He personally cares for you change how you approach your burdens?`,
    prayer: `Heavenly Father, thank you for caring about every detail of my life. Help me to cast all my cares upon thee, trusting in thy loving concern and sovereign power. Teach me to leave my burdens at thy feet. Amen.`,
    readingPlan: "1 Peter 5-6",
    reflection: [
      {
        id: "11-1",
        question: "What specific care do you need to cast upon God today?",
        placeholder: "Name it specifically...",
      },
      {
        id: "11-2",
        question: "How does knowing God cares for you personally change your perspective?",
        placeholder: "Describe the emotional shift...",
      },
      {
        id: "11-3",
        question: "What practical step helps you leave your burdens with God rather than retaking them?",
        placeholder: "e.g., writing them down, prayer of release...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      reference: "Hebrews 4:16",
      defaultVersion: "KJV",
    },
    title: "The Throne of Grace",
    content: `Because of Jesus' perfect sacrifice, we can approach God's throne with confidence. This isn't a throne of judgment but of grace - where we find mercy and help in time of need. 

    This access is both a privilege and a promise. We don't come based on our worthiness but on Christ's finished work. Our needs become opportunities to experience God's sufficient grace and timely help.

    What need are you bringing to the throne of grace today? How does understanding this access as a gift of grace change how you approach God?`,
    prayer: ` merciful God, thank you for providing access to your throne through Jesus Christ. Help me to come boldly to find mercy and grace in my time of need. Amen.`,
    readingPlan: "Hebrews 4-5",
    reflection: [
      {
        id: "12-1",
        question: "What specific need are you bringing to God's throne of grace?",
        placeholder: "Be specific about your need...",
      },
      {
        id: "12-2",
        question: "How does approaching God's throne as grace rather than judgment change your prayer life?",
        placeholder: "Describe the difference it makes...",
      },
      {
        id: "12-3",
        question: "When have you experienced God's timely help in a past time of need?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      reference: "Lamentations 3:22-23",
      defaultVersion: "KJV",
    },
    title: "New Mercies Every Morning",
    content: `God's mercies are not only abundant but new every morning. His faithfulness is great and unwavering, even when ours is not. Each day brings a fresh supply of grace, compassion, and mercy.

    This promise comes in the context of deep suffering - reminding us that God's faithfulness isn't dependent on our circumstances. Even in darkness, His mercies continue and His compassion never fails.

    How can you become more aware of God's new mercies each day? What difference might this awareness make in your daily outlook?`,
    prayer: `Faithful God, thank you for your mercies that are new every morning and your great faithfulness. Open my eyes to recognize your fresh grace each day and trust your unwavering faithfulness. Amen.`,
    readingPlan: "Lamentations 3-4",
    reflection: [
      {
        id: "13-1",
        question: "How have you experienced God's new mercies recently?",
        placeholder: "Look for specific examples...",
      },
      {
        id: "13-2",
        question: "What difference does it make to know God's faithfulness is great and unwavering?",
        placeholder: "Describe the security this brings...",
      },
      {
        id: "13-3",
        question: "How might starting each day looking for God's new mercies change your perspective?",
        placeholder: "Consider practical ways to cultivate this awareness...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      reference: "James 1:5",
      defaultVersion: "KJV",
    },
    title: "Wisdom From Above",
    content: `God generously gives wisdom to those who ask in faith without doubting. This wisdom isn't merely intellectual knowledge but practical insight for godly living. It's the ability to see life from God's perspective and respond accordingly.

    The condition is asking in faith, without doubting God's willingness or ability to provide the wisdom we need. He gives generously without finding fault, even when we've made poor decisions in the past.

    What decision or situation requires God's wisdom in your life right now? How can you ask in faith without doubting?`,
    prayer: `God of all wisdom, I ask for your divine insight into the situations I face. Help me to ask in faith, trusting your generous nature and perfect guidance. Amen.`,
    readingPlan: "James 1-2",
    reflection: [
      {
        id: "14-1",
        question: "What specific situation requires God's wisdom in your life?",
        placeholder: "Describe the circumstance needing guidance...",
      },
      {
        id: "14-2",
        question: "What doubts might hinder you from asking God for wisdom in faith?",
        placeholder: "Identify specific doubts or hesitations...",
      },
      {
        id: "14-3",
        question: "How have you experienced God's wisdom in a past decision?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      reference: "2 Timothy 1:7",
      defaultVersion: "KJV",
    },
    title: "A Spirit of Power",
    content: `God has given us a spirit of power, love, and a sound mind - not of fear. This tripartite gift enables us to live courageously, love generously, and think clearly amidst life's challenges.

    Fear often paralyzes and distorts, but God's Spirit empowers us to face difficulties with confidence in His presence and provision. His power is perfected in our weakness, His love casts out fear, and His sound mind brings clarity.

    What fears are you facing that need to be replaced by God's spirit of power, love, and sound mind?`,
    prayer: `Heavenly Father, thank you for giving me a spirit of power, love, and a sound mind. Help me to walk in this reality rather than yielding to fear. Amen.`,
    readingPlan: "2 Timothy 1-2",
    reflection: [
      {
        id: "15-1",
        question: "What specific fear do you need to replace with God's spirit of power?",
        placeholder: "Name the fear specifically...",
      },
      {
        id: "15-2",
        question: "How would operating in a spirit of power, love, and sound mind change your current situation?",
        placeholder: "Describe the potential transformation...",
      },
      {
        id: "15-3",
        question: "When have you experienced God's power overcoming fear in the past?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      reference: "Psalm 37:4",
      defaultVersion: "KJV",
    },
    title: "Delight in the Lord",
    content: `As we delight ourselves in the Lord, He gives us the desires of our heart. This isn't a formula for getting what we want but a transformation of what we want. As we find our joy in God, our desires align with His.

    Delighting in God means enjoying His presence, cherishing His character, and finding satisfaction in relationship with Him. When God becomes our chief delight, our desires reflect His priorities.

    What does delighting in the Lord look like in your daily life? How might this delight transform your desires?`,
    prayer: `Lord God, teach me to delight in thee above all else. Align the desires of my heart with thy will and purposes. May my greatest joy be found in relationship with thee. Amen.`,
    readingPlan: "Psalm 37-38",
    reflection: [
      {
        id: "16-1",
        question: "What practical practices help you delight in the Lord?",
        placeholder: "Identify specific spiritual disciplines...",
      },
      {
        id: "16-2",
        question: "How have you noticed your desires changing as you delight in God?",
        placeholder: "Describe the transformation...",
      },
      {
        id: "16-3",
        question: "What competing delights might be hindering your delight in God?",
        placeholder: "Name potential idols or distractions...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      reference: "Ephesians 3:20",
      defaultVersion: "KJV",
    },
    title: "Exceedingly Abundantly",
    content: `God is able to do exceedingly abundantly above all we ask or think according to His power that works in us. His ability exceeds our imagination, and His methods surpass our understanding.

    This power is not merely something we observe but something that works within us as we yield to Him. God's exceeding abundance often comes in unexpected ways and timing.

    What limitation are you placing on God's ability to work in your situation? How might opening yourself to His exceeding abundance change your expectations?`,
    prayer: `Almighty God, help me to trust in your ability to do exceedingly abundantly above all I can ask or imagine. Work your power in me to accomplish your purposes. Amen.`,
    readingPlan: "Ephesians 3-4",
    reflection: [
      {
        id: "17-1",
        question: "In what area do you need to believe God for exceedingly abundant things?",
        placeholder: "Identify the specific area...",
      },
      {
        id: "17-2",
        question: "How might your limited thinking be restricting what God wants to do?",
        placeholder: "Consider your assumptions and limitations...",
      },
      {
        id: "17-3",
        question: "When have you experienced God doing exceeding abundantly in your life or others?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      reference: "Colossians 3:2",
      defaultVersion: "KJV",
    },
    title: "Set Your Affection",
    content: `We're commanded to set our affection on things above, not on things on the earth. This involves a deliberate redirecting of our thoughts, desires, and priorities toward eternal realities.

    Setting our affection on heavenly things doesn't mean neglecting earthly responsibilities but viewing them through an eternal lens. It's about living with eternity in mind, valuing what God values.

    What earthly things tend to capture your affection disproportionately? How can you practically set your mind on things above today?`,
    prayer: `Heavenly Father, help me to set my affection on things above, not on earthly things. Give me an eternal perspective that values what you value. Amen.`,
    readingPlan: "Colossians 3-4",
    reflection: [
      {
        id: "18-1",
        question: "What earthly things tend to capture your affection inappropriately?",
        placeholder: "Identify specific attachments...",
      },
      {
        id: "18-2",
        question: "What practical steps help you set your mind on things above?",
        placeholder: "e.g., Scripture meditation, eternal perspective questions...",
      },
      {
        id: "18-3",
        question: "How does an eternal perspective change how you approach daily decisions?",
        placeholder: "Describe the shift in priorities...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      reference: "Galatians 5:22-23",
      defaultVersion: "KJV",
    },
    title: "The Fruit of the Spirit",
    content: `The fruit of the Spirit is the natural outcome of a life surrendered to God's Spirit. Unlike worldly achievements, this fruit grows organically as we abide in Christ and yield to the Spirit's work.

    These qualities - love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control - reflect Christ's character being formed in us. They can't be manufactured through self-effort but only cultivated through relationship.

    Which fruit of the Spirit is God particularly developing in your life right now? How are you cooperating with His cultivating work?`,
    prayer: `Holy Spirit, produce your fruit in my life as I yield to your work. Develop in me love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Amen.`,
    readingPlan: "Galatians 5-6",
    reflection: [
      {
        id: "19-1",
        question: "Which fruit of the Spirit is God developing in you currently?",
        placeholder: "Identify the specific fruit...",
      },
      {
        id: "19-2",
        question: "How are you cooperating with the Spirit's work in cultivating this fruit?",
        placeholder: "Describe your intentional practices...",
      },
      {
        id: "19-3",
        question: "What hinders the growth of spiritual fruit in your life?",
        placeholder: "Identify potential obstacles...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      reference: "Revelation 21:5",
      defaultVersion: "KJV",
    },
    title: "Behold, I Make All Things New",
    content: `God's ultimate promise is to make all things new - a complete restoration and renewal of creation. This future hope impacts our present reality, giving us perspective amid temporary troubles.

    The same God who will make all things new in the future is at work making us new today. His renewing work touches every area of our lives - relationships, perspectives, priorities, and purposes.

    What area of your life needs God's renewing work today? How does the hope of ultimate renewal encourage you in present challenges?`,
    prayer: `God of new beginnings, thank you for your promise to make all things new. Work your renewing power in my life today and give me hope for the future restoration of all things. Amen.`,
    readingPlan: "Revelation 21-22",
    reflection: [
      {
        id: "20-1",
        question: "What area of your life most needs God's renewing work right now?",
        placeholder: "Be specific about what needs renewal...",
      },
      {
        id: "20-2",
        question: "How does the hope of ultimate renewal encourage you in present difficulties?",
        placeholder: "Describe the perspective it brings...",
      },
      {
        id: "20-3",
        question: "How have you experienced God's renewing work in your life in the past?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      reference: "Isaiah 41:10",
      defaultVersion: "KJV",
    },
    title: "Fear Not, For I Am With Thee",
    content: `God commands us not to fear because He is with us. This promise comes with four assurances: His presence ("I am with thee"), His protection ("I will strengthen thee"), His help ("I will help thee"), and His sustaining power ("I will uphold thee").

    Fear often paralyzes us, but God's presence empowers us to face challenges with confidence. His promise isn't that we won't face difficulties, but that He will be with us through them.

    What fear is currently gripping your heart? How can you appropriate God's promise of presence and protection today?`,
    prayer: `Heavenly Father, when fear threatens to overwhelm me, remind me of thy faithful presence. Strengthen, help, and uphold me according to thy promise. Amen.`,
    readingPlan: "Isaiah 41-42",
    reflection: [
      {
        id: "21-1",
        question: "What specific fear do you need to surrender to God today?",
        placeholder: "Name the fear specifically...",
      },
      {
        id: "21-2",
        question: "How has God demonstrated His presence in past fearful situations?",
        placeholder: "Recall a specific example...",
      },
      {
        id: "21-3",
        question: "Which of God's four assurances do you need most right now?",
        placeholder: "Presence, strength, help, or upholding...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      reference: "Matthew 6:33",
      defaultVersion: "KJV",
    },
    title: "Seek First the Kingdom",
    content: `Jesus instructs us to seek God's kingdom and righteousness above all else, with the promise that our practical needs will be provided. This reorients our priorities from anxiety about temporal things to passion for eternal realities.

    Seeking God's kingdom means aligning our desires, decisions, and daily life with His values and purposes. It's about putting spiritual priorities above material concerns.

    What temporal concerns are distracting you from seeking God's kingdom first? How might reordering your priorities change your perspective on needs?`,
    prayer: `Heavenly Father, help me to seek first thy kingdom and righteousness. Align my desires with thy purposes and free me from anxiety about temporal needs. Amen.`,
    readingPlan: "Matthew 6-7",
    reflection: [
      {
        id: "22-1",
        question: "What practical concern tends to distract you from seeking God's kingdom?",
        placeholder: "Identify the specific concern...",
      },
      {
        id: "22-2",
        question: "What does seeking God's kingdom first look like in your current season?",
        placeholder: "Describe practical applications...",
      },
      {
        id: "22-3",
        question: "How have you experienced God's provision when you put His kingdom first?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
  {
    id: "23",
    date: getDevotionalDate("23"),
    verse: {
      reference: "Psalm 119:105",
      defaultVersion: "KJV",
    },
    title: "Thy Word Is a Lamp",
    content: `God's Word provides illumination for our path, revealing obstacles and showing the way forward. It doesn't illuminate the entire journey at once but gives enough light for the next step.

    This guidance is personal and practical - God's Word lights "my" path. Regular immersion in Scripture keeps our way illuminated and prevents stumbling in darkness.

    What decision or situation requires God's Word to illuminate your path? How can you cultivate greater consistency in Scripture engagement?`,
    prayer: `Heavenly Father, thank you for thy Word that illuminates my path. Help me to hide it in my heart that I might not sin against thee. Amen.`,
    readingPlan: "Psalm 119:105-112",
    reflection: [
      {
        id: "23-1",
        question: "What specific area of your life needs the illumination of God's Word?",
        placeholder: "Identify the situation needing guidance...",
      },
      {
        id: "23-2",
        question: "How has Scripture guided you in a past decision?",
        placeholder: "Recall a specific example...",
      },
      {
        id: "23-3",
        question: "What practical step can you take to engage more consistently with God's Word?",
        placeholder: "e.g., specific time, method, or plan...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      reference: "John 14:27",
      defaultVersion: "KJV",
    },
    title: "Peace I Leave With You",
    content: `Jesus bequeaths His peace to us as a legacy gift - not as the world gives. The world's peace is circumstantial and temporary, but Christ's peace is supernatural and sustaining regardless of circumstances.

    This peace guards our hearts and minds amid turmoil, serving as an internal stabilizer when external situations are unstable. It's rooted in Christ's victory over sin and death.

    What turmoil are you facing that requires Christ's supernatural peace? How can you appropriate this gift today?`,
    prayer: `Prince of Peace, thank you for the gift of thy peace that surpasses understanding. Guard my heart and mind in Christ Jesus amid life's storms. Amen.`,
    readingPlan: "John 14-15",
    reflection: [
      {
        id: "24-1",
        question: "What situation is threatening your peace right now?",
        placeholder: "Identify the source of turmoil...",
      },
      {
        id: "24-2",
        question: "How is Christ's peace different from worldly peace?",
        placeholder: "Describe the contrast...",
      },
      {
        id: "24-3",
        question: "What practices help you appropriate Christ's peace in daily life?",
        placeholder: "e.g., prayer, worship, Scripture meditation...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      reference: "Romans 12:2",
      defaultVersion: "KJV",
    },
    title: "Be Not Conformed",
    content: `We're called to resist conformity to the world's pattern and instead be transformed by renewed minds. This transformation is ongoing ("be transformed") and internal ("renewing of your mind").

    The world's pattern pressures us to adopt its values, priorities, and perspectives. Renewing our minds through Scripture allows us to discern and embrace God's good, acceptable, and perfect will.

    What worldly pattern are you most tempted to conform to? How is God renewing your mind to discern His will?`,
    prayer: `Heavenly Father, protect me from conformity to the world. Transform me by the renewing of my mind that I may discern and do thy perfect will. Amen.`,
    readingPlan: "Romans 12-13",
    reflection: [
      {
        id: "25-1",
        question: "What worldly pattern are you most tempted to conform to?",
        placeholder: "Identify the specific pressure...",
      },
      {
        id: "25-2",
        question: "How is God currently renewing your mind to discern His will?",
        placeholder: "Describe the transformation process...",
      },
      {
        id: "25-3",
        question: "What practice most helps you renew your mind according to Scripture?",
        placeholder: "e.g., specific study method, meditation...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      reference: "1 Corinthians 10:13",
      defaultVersion: "KJV",
    },
    title: "A Way of Escape",
    content: `God faithfully provides a way of escape from every temptation, enabling us to endure without being overcome. His faithfulness isn't measured by preventing temptation but by providing deliverance in it.

    Temptation is common to humanity, but God's way of escape is uniquely tailored to each situation. Recognizing and taking His provided exit requires spiritual alertness and willingness.

    What temptation are you currently facing? How might God be providing a way of escape?`,
    prayer: `Faithful God, thank you for providing a way of escape in every temptation. Give me eyes to see thy provided exit and willingness to take it. Amen.`,
    readingPlan: "1 Corinthians 10-11",
    reflection: [
      {
        id: "26-1",
        question: "What specific temptation are you currently facing?",
        placeholder: "Name the temptation specifically...",
      },
      {
        id: "26-2",
        question: "How has God provided escape from temptation in the past?",
        placeholder: "Recall a specific example...",
      },
      {
        id: "26-3",
        question: "What practical step helps you recognize God's way of escape?",
        placeholder: "e.g., prayer, accountability, Scripture memorization...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      reference: "2 Corinthians 5:17",
      defaultVersion: "KJV",
    },
    title: "A New Creation",
    content: `In Christ, we become new creations - the old passes away and all things become new. This transformation is comprehensive ("all things") and fundamental ("new creation"), affecting every aspect of our being.

    This newness isn't merely behavioral modification but spiritual transformation. Our identity, position, and potential are fundamentally changed through union with Christ.

    What aspect of your "old self" are you still struggling to leave behind? How does embracing your new identity in Christ change your perspective?`,
    prayer: `Heavenly Father, thank you for making me a new creation in Christ. Help me to live out this new identity and leave behind old patterns and perspectives. Amen.`,
    readingPlan: "2 Corinthians 5-6",
    reflection: [
      {
        id: "27-1",
        question: "What old pattern or perspective are you struggling to leave behind?",
        placeholder: "Identify the specific struggle...",
      },
      {
        id: "27-2",
        question: "How does your new identity in Christ change how you view yourself?",
        placeholder: "Describe the identity shift...",
      },
      {
        id: "27-3",
        question: "What practical step helps you live out your new creation reality?",
        placeholder: "e.g., affirming truth, practicing new patterns...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      reference: "Psalm 34:8",
      defaultVersion: "KJV",
    },
    title: "Taste and See",
    content: `David invites us to personally experience God's goodness - to "taste and see" that the Lord is good. This isn't theoretical knowledge but experiential reality discovered through relationship.

    Tasting implies personal participation rather than mere observation. As we experience God's faithfulness, our trust deepens and our testimony becomes more compelling.

    How have you personally "tasted" God's goodness? How might you cultivate greater awareness of His goodness in daily life?`,
    prayer: `Good Father, open my spiritual senses to taste and see thy goodness. Deepen my experience of thy faithful character and lovingkindness. Amen.`,
    readingPlan: "Psalm 34-35",
    reflection: [
      {
        id: "28-1",
        question: "How have you personally experienced God's goodness recently?",
        placeholder: "Describe a specific experience...",
      },
      {
        id: "28-2",
        question: "What spiritual practice helps you 'taste' God's goodness?",
        placeholder: "e.g., gratitude journaling, remembrance...",
      },
      {
        id: "28-3",
        question: "How does experiencing God's goodness affect your trust in Him?",
        placeholder: "Describe the relationship between experience and trust...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      reference: "1 John 1:9",
      defaultVersion: "KJV",
    },
    title: "Faithful to Forgive",
    content: `God is faithful and just to forgive our sins when we confess them. His forgiveness isn't based on our merit but on Christ's sacrifice, making Him both faithful to His promise and just to Christ's payment.

    Confession involves agreeing with God about our sin - acknowledging its reality, taking responsibility, and turning from it. God's response is immediate and complete forgiveness.

    What sin do you need to confess to experience God's faithful forgiveness? How does understanding His justice and faithfulness impact your approach to confession?`,
    prayer: `Faithful God, thank you for thy promise to forgive when I confess. Give me courage to acknowledge my sins and receive thy cleansing and restoration. Amen.`,
    readingPlan: "1 John 1-2",
    reflection: [
      {
        id: "29-1",
        question: "What sin do you need to confess to God today?",
        placeholder: "Be specific...",
      },
      {
        id: "29-2",
        question: "How does understanding God's faithfulness and justice impact your confession?",
        placeholder: "Describe the difference it makes...",
      },
      {
        id: "29-3",
        question: "What practical step helps you maintain a lifestyle of repentance?",
        placeholder: "e.g., daily examination, accountability...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      reference: "Jeremiah 29:11",
      defaultVersion: "KJV",
    },
    title: "Thoughts of Peace",
    content: `God's thoughts toward us are thoughts of peace and not evil, to give us a future and a hope. This promise was given during exile, reminding us that God's good plans transcend difficult circumstances.

    God's plans are purposeful ("to give you an expected end"), personal ("for you"), and promising ("hope"). Even when we can't see His purposes, we can trust His heart.

    What difficult circumstance are you facing where you need to trust God's good plans? How does this promise change your perspective on your situation?`,
    prayer: `Heavenly Father, thank you that thy thoughts toward me are thoughts of peace. Help me to trust thy good plans even when I cannot see them. Amen.`,
    readingPlan: "Jeremiah 29-30",
    reflection: [
      {
        id: "30-1",
        question: "What difficult circumstance requires you to trust God's good plans?",
        placeholder: "Describe the situation...",
      },
      {
        id: "30-2",
        question: "How does knowing God's thoughts toward you are peaceful change your perspective?",
        placeholder: "Describe the emotional shift...",
      },
      {
        id: "30-3",
        question: "When have you seen God's good plans emerge from a difficult situation?",
        placeholder: "Recall a specific example...",
      },
    ],
  },
];
