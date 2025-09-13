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
      text: {
        NIV: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        ESV: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        KJV: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
        NKJV: "For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.",
        NASB: "For I know the plans that I have for you,' declares the Lord, 'plans for prosperity and not for disaster, to give you a future and a hope.",
      },
      reference: "Jeremiah 29:11",
      defaultVersion: "KJV",
    },
    title: "God's Plans for You",
    content: `When life feels uncertain or challenging, it's comforting to remember that God has a plan for each of us. This verse from Jeremiah reminds us that even when we can't see the way forward, God is working behind the scenes for our good.

      His plans are not to harm us but to give us hope and a future. This doesn't mean we won't face difficulties, but rather that in the midst of them, we can trust that God is with us, guiding us toward a purposeful life.

      Today, reflect on areas where you need to trust God's plan more fully. Where might you be trying to control outcomes instead of surrendering to His will?`,
    prayer: `Heavenly Father, thank you for having good plans for my life. Help me to trust you more completely, especially when the path ahead seems unclear. Give me the faith to believe that you are working all things together for my good. Amen.`,
    readingPlan: "Jeremiah 29-30",
    reflection: [
      {
        id: "1-1",
        question:
          "What area of your life do you find hardest to trust God with?",
        placeholder: "Write about why this is difficult for you...",
      },
      {
        id: "1-2",
        question:
          "How might God be inviting you to surrender control in this situation?",
        placeholder: "Describe what surrender might look like...",
      },
      {
        id: "1-3",
        question: "What hope does this verse give you for your future?",
        placeholder: "Share the hopes that come to mind...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      text: {
        NIV: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        ESV: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
        KJV: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
        NKJV: "Trust in the Lord with all your heart, and lean not on your own understanding; In all your ways acknowledge Him, and He shall direct your paths.",
        NASB: "Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.",
      },
      reference: "Proverbs 3:5-6",
      defaultVersion: "KJV",
    },
    title: "Trust in the Lord",
    content: `Trusting God completely is one of the most challenging yet rewarding aspects of our faith journey. It requires letting go of our need to understand everything and instead relying on God's infinite wisdom.

      When we surrender our plans and desires to God, He promises to guide our steps and direct our paths. This doesn't mean life will be without challenges, but that we can have confidence God is leading us in the right direction.

      Consider areas where you're struggling to trust God fully. What would it look like to release those concerns to Him today?`,
    prayer: `Lord, help me to trust You with all my heart and not rely on my own understanding. Guide my steps and make my paths straight as I submit my ways to You. Amen.`,
    readingPlan: "Proverbs 3-4",
    reflection: [
      {
        id: "2-1",
        question:
          "Where are you currently relying on your own understanding instead of trusting God?",
        placeholder: "Identify specific situations...",
      },
      {
        id: "2-2",
        question: "What would it look like to fully submit this area to God?",
        placeholder: "Describe practical steps of surrender...",
      },
      {
        id: "2-3",
        question: "How has God proven trustworthy in your past?",
        placeholder: "Recall specific examples...",
      },
    ],
  },
  {
    id: "3",
    date: getDevotionalDate("3"),
    verse: {
      text: {
        NIV: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
        ESV: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.",
        KJV: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul.",
        NKJV: "The Lord is my shepherd; I shall not want. He makes me to lie down in green pastures; He leads me beside the still waters. He restores my soul.",
        NASB: "The Lord is my shepherd, I will not be in need. He has me lie down in green pastures; He leads me beside quiet waters. He restores my soul.",
      },
      reference: "Psalm 23:1-3",
      defaultVersion: "KJV",
    },
    title: "The Good Shepherd",
    content: `In seasons of weariness or want, Psalm 23 reminds us of God's faithful provision and care. Like a shepherd tending his sheep, God guides us to places of rest and renewal. He knows exactly what we need—even when we don't recognize it ourselves.

    The imagery of green pastures and quiet waters speaks of God's desire to restore our souls. He doesn't merely provide for our physical needs but tends to our emotional and spiritual well-being.

    Where do you need God's shepherding today? Are you carrying burdens you could surrender to the One who promises to refresh your soul?`,
    prayer: `Lord, thank you for being my Shepherd. Help me to trust your guidance and rest in your provision. Renew my soul today and teach me to follow your voice. Amen.`,
    readingPlan: "Psalm 22-24",
    reflection: [
      {
        id: "3-1",
        question:
          "What burdens are you carrying that you need to surrender to God?",
        placeholder: "List the worries or responsibilities weighing on you...",
      },
      {
        id: "3-2",
        question: "How has God provided for you in times of need?",
        placeholder: "Remember specific instances of God's provision...",
      },
      {
        id: "3-3",
        question: "What would it look like to truly rest in God's care today?",
        placeholder: "Describe practical ways to find rest in God...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      text: {
        NIV: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        ESV: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
        KJV: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
        NKJV: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God.",
        NASB: "Do not be anxious about anything, but in everything by prayer and pleading with thanksgiving let your requests be made known to God.",
      },
      reference: "Philippians 4:6",
      defaultVersion: "KJV",
    },
    title: "Peace Beyond Understanding",
    content: `Anxiety is a common human experience, but God invites us to exchange our worries for his peace. This verse doesn't suggest we ignore real concerns, but rather bring them intentionally to God through prayer.

    Notice the emphasis on thanksgiving—even before answers come. Gratitude shifts our focus from problems to God's faithfulness in past situations.

    What anxieties are you holding today? Practice writing down your concerns as prayers, then list things you're thankful for in each situation.`,
    prayer: `Heavenly Father, I bring my worries to you today. Thank you for your constant care. Help me to replace anxiety with grateful prayer and trust in your goodness. Amen.`,
    readingPlan: "Philippians 3-4",
    reflection: [
      {
        id: "4-1",
        question: "What specific anxieties are you currently facing?",
        placeholder: "Name your worries and fears...",
      },
      {
        id: "4-2",
        question:
          "How can you practice gratitude in the midst of these anxieties?",
        placeholder: "List things you can thank God for even now...",
      },
      {
        id: "4-3",
        question:
          "What would it look like to fully release these concerns to God?",
        placeholder: "Describe what surrender would mean practically...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      text: {
        NIV: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        ESV: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
        KJV: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
        NKJV: "But those who wait on the Lord shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.",
        NASB: "Yet those who wait for the Lord will gain new strength; They will mount up with wings like eagles, They will run and not get tired, They will walk and not become weary.",
      },
      reference: "Isaiah 40:31",
      defaultVersion: "KJV",
    },
    title: "Renewed Strength",
    content: `Waiting on God isn't passive—it's an active posture of trust and expectation. This promise isn't for those who rely on their own strength, but for those who acknowledge their dependence on God.

    The imagery progresses from soaring to running to walking, reminding us that God provides strength for both extraordinary moments and daily perseverance.

    Are you feeling weary? How might God be inviting you to wait on him rather than striving in your own power?`,
    prayer: `Lord, I wait on you today. Renew my strength and help me to trust your timing. Teach me to rely on your power rather than my own limited resources. Amen.`,
    readingPlan: "Isaiah 40-41",
    reflection: [
      {
        id: "5-1",
        question:
          "In what areas of your life are you feeling weary or drained?",
        placeholder: "Identify the sources of your fatigue...",
      },
      {
        id: "5-2",
        question:
          "How might God be inviting you to wait on Him in these areas?",
        placeholder: "Consider what waiting actively looks like...",
      },
      {
        id: "5-3",
        question:
          "What does it mean to you that God promises to renew your strength?",
        placeholder: "Reflect on the promise of renewed strength...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      text: {
        NIV: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
        ESV: "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!",
        KJV: "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
        NKJV: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!",
        NASB: "Cease striving and know that I am God; I will be exalted among the nations, I will be exalted on the earth.",
      },
      reference: "Psalm 46:10",
      defaultVersion: "KJV",
    },
    title: "The Power of Stillness",
    content: `In our noisy, busy world, God invites us to purposeful stillness. This isn't merely about physical quietness, but about acknowledging God's sovereignty in every circumstance.

    When we pause to remember who God is—his power, faithfulness, and majesty—our problems and worries shrink in perspective.

    Create space for stillness today. Even five minutes of silent meditation on God's character can recenter your soul on what truly matters.`,
    prayer: `God, help me to be still in your presence today. Remind me of your sovereignty over all things. Quiet my heart and help me to worship you above all else. Amen.`,
    readingPlan: "Psalm 46-48",
    reflection: [
      {
        id: "6-1",
        question: "What distractions keep you from being still before God?",
        placeholder: "Identify the things that pull your attention away...",
      },
      {
        id: "6-2",
        question:
          "How does remembering God's sovereignty change your perspective on current challenges?",
        placeholder: "Reflect on God's power and control...",
      },
      {
        id: "6-3",
        question:
          "What practical step can you take to create space for stillness today?",
        placeholder: "Plan a specific time and place for stillness...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      text: {
        NIV: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        ESV: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        KJV: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
        NKJV: "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.",
        NASB: "Therefore if anyone is in Christ, this person is a new creation; the old things passed away; behold, new things have come.",
      },
      reference: "2 Corinthians 5:17",
      defaultVersion: "KJV",
    },
    title: "Made New",
    content: `This verse proclaims the transformative power of Christ's redemption. Being "in Christ" isn't about external behavior modification but about fundamental identity change.

    God doesn't just improve us; he makes us new. The old patterns, guilt, and brokenness are replaced with purpose, forgiveness, and healing.

    What areas of your life still need to align with this new identity? How can you live today as someone truly made new in Christ?`,
    prayer: `Jesus, thank you for making me a new creation. Help me to live out this reality daily, leaving behind old patterns and embracing the identity you've given me. Amen.`,
    readingPlan: "2 Corinthians 4-6",
    reflection: [
      {
        id: "7-1",
        question:
          "What does being a 'new creation' in Christ mean to you personally?",
        placeholder: "Reflect on the meaning of this transformation...",
      },
      {
        id: "7-2",
        question: "Which old patterns or habits do you need to leave behind?",
        placeholder: "Identify areas where you need renewal...",
      },
      {
        id: "7-3",
        question: "How can you living out your new identity in Christ today?",
        placeholder: "Consider practical ways to embrace your new nature...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      text: {
        NIV: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        ESV: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
        KJV: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        NKJV: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
        NASB: "For God so loved the world, that He gave His only Son, so that everyone who believes in Him will not perish, but have eternal life.",
      },
      reference: "John 3:16",
      defaultVersion: "KJV",
    },
    title: "The Heart of the Gospel",
    content: `This is perhaps the most well-known verse in the Bible, and for good reason. It summarizes the entire gospel: God's motivation (love), God's action (gave His Son), our response (belief), and the result (eternal life, not perishing).

    Salvation is not a reward for good behavior but a gift born from the immense, personal love of God for you and for the world. It's offered to "whoever" places their trust in Him.`,
    prayer: `Heavenly Father, I am overwhelmed by your love that would give so much for me. Thank you for the gift of your Son. I believe in Jesus; help my unbelief and anchor my life in this incredible truth. Amen.`,
    readingPlan: "John 3:1-21",
    reflection: [
      {
        id: "8-1",
        question:
          "What does it mean to you that God's love for the world prompted such a radical sacrifice?",
        placeholder: "Reflect on the depth of God's love...",
      },
      {
        id: "8-2",
        question:
          "How does understanding salvation as a 'gift' rather than a 'reward' change your approach to God?",
        placeholder: "Consider the nature of grace...",
      },
      {
        id: "8-3",
        question:
          "Who in your life needs to hear this message of God's love and salvation?",
        placeholder: "Think of someone to pray for or share with...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      text: {
        NIV: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.",
        ESV: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        KJV: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
        NKJV: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.",
        NASB: "For by grace you have been saved through faith; and this is not of yourselves, it is the gift of God; not a result of works, so that no one may boast.",
      },
      reference: "Ephesians 2:8-9",
      defaultVersion: "KJV",
    },
    title: "The Gift of Grace",
    content: `This is the great equalizer of the faith. No one is beyond salvation because of their past, and no one earns it through their performance. Our rescue from sin and death is entirely God's work—His grace, His gift.

    We simply receive it through faith. This truth frees us from the exhausting treadmill of trying to earn God's favor and allows us to rest in what Christ has already accomplished.`,
    prayer: `Lord, I confess I often try to earn your love. Thank you for the freeing truth that my salvation is a gift, paid for by Jesus. Help me to rest in your grace and live from a place of gratitude, not obligation. Amen.`,
    readingPlan: "Ephesians 2:1-10",
    reflection: [
      {
        id: "9-1",
        question:
          "In what ways do you sometimes try to 'earn' God's favor or salvation?",
        placeholder: "Identify areas of self-reliance...",
      },
      {
        id: "9-2",
        question:
          "How does understanding salvation as a gift change your motivation for living a Christian life?",
        placeholder: "Contrast obligation with gratitude...",
      },
      {
        id: "9-3",
        question: "What is one way you can 'rest' in God's grace today?",
        placeholder: "Think of a practical step...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      text: {
        NIV: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
        ESV: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
        KJV: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
        NKJV: "Jesus said to him, 'I am the way, the truth, and the life. No one comes to the Father except through Me.'",
        NASB: "Jesus said to him, 'I am the way, and the truth, and the life; no one comes to the Father except through Me.'",
      },
      reference: "John 14:6",
      defaultVersion: "KJV",
    },
    title: "The Exclusive Claim",
    content: `In our pluralistic world, this is a challenging but essential truth. Jesus makes an exclusive claim about salvation. He doesn't present himself as one path among many, but as *the* path to God.

    This isn't arrogance; it's the confident declaration of the only one who could bridge the gap between a holy God and sinful humanity. Our access to the Father is found exclusively in the person and work of Jesus Christ.`,
    prayer: `Jesus, thank you for being the way. In a world of confusion, I am grateful for the clarity and certainty you offer. I trust you alone for my access to the Father and my eternal life. Amen.`,
    readingPlan: "John 14:1-14",
    reflection: [
      {
        id: "10-1",
        question:
          "Why do you think Jesus' claim to be the only way is difficult for our culture to accept?",
        placeholder: "Consider modern views on truth...",
      },
      {
        id: "10-2",
        question:
          "How does this truth inspire confidence in your own salvation?",
        placeholder: "Reflect on the security found in Christ alone...",
      },
      {
        id: "10-3",
        question:
          "How can we share this exclusive truth with both conviction and love?",
        placeholder: "Think about the balance of truth and grace...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      text: {
        NIV: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
        ESV: "Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.",
        KJV: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
        NKJV: "That if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved.",
        NASB: "that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved;",
      },
      reference: "Romans 10:9",
      defaultVersion: "KJV",
    },
    title: "Confess and Believe",
    content: `This verse provides a clear, two-part description of the response that leads to salvation: belief in the heart and confession with the mouth. It's an internal reality that produces an external expression.

    Believing in the resurrection is essential—it confirms Jesus' victory over sin and death. Confessing Him as Lord means surrendering ultimate authority of your life to Him. This is the simple, powerful path to salvation.`,
    prayer: `Jesus, I believe in my heart that you died for my sins and that God raised you from the dead. I confess with my mouth that you are my Lord. Thank you for the salvation you promise to all who call on you. Amen.`,
    readingPlan: "Romans 10:5-17",
    reflection: [
      {
        id: "11-1",
        question:
          "What does it mean, in practical terms, to confess 'Jesus is Lord' over your life?",
        placeholder: "Consider the areas you surrender to His authority...",
      },
      {
        id: "11-2",
        question:
          "Why is belief in the resurrection so central to the Christian faith?",
        placeholder: "Reflect on its significance...",
      },
      {
        id: "11-3",
        question:
          "Have you made this confession of faith? If so, when did it become real for you?",
        placeholder: "Remember your own story of faith...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      text: {
        NIV: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
        ESV: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
        KJV: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
        NKJV: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
        NASB: "For the wages of sin is death, but the gracious gift of God is eternal life in Christ Jesus our Lord.",
      },
      reference: "Romans 6:23",
      defaultVersion: "KJV",
    },
    title: "Wages vs. Gift",
    content: `This verse presents a stark contrast between what we deserve and what God offers. A wage is earned, and the earned consequence of our sin is spiritual death—separation from God.

    But God intervenes with a gift. We cannot earn eternal life; it is given freely through Jesus Christ. He paid the wage we earned so we could receive the gift we never could.`,
    prayer: `Father, I acknowledge that I have earned the wages of my sin. Thank you for the incredible gift of eternal life through Jesus, who paid my debt. I receive your gift with a humble and grateful heart. Amen.`,
    readingPlan: "Romans 6:15-23",
    reflection: [
      {
        id: "12-1",
        question:
          "How does understanding what you 'deserve' make the gift of salvation more precious?",
        placeholder: "Reflect on the concept of grace...",
      },
      {
        id: "12-2",
        question:
          "In what ways do you sometimes still try to 'earn' God's gift?",
        placeholder: "Identify any lingering performance mentality...",
      },
      {
        id: "12-3",
        question:
          "How can you live today in the freedom of receiving this gift, rather than trying to earn it?",
        placeholder: "Think of a practical attitude shift...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      text: {
        NIV: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God—",
        ESV: "But to all who did receive him, who believed in his name, he gave the right to become children of God,",
        KJV: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:",
        NKJV: "But as many as received Him, to them He gave the right to become children of God, to those who believe in His name:",
        NASB: "But as many as received Him, to them He gave the right to become children of God, to those who believe in His name,",
      },
      reference: "John 1:12",
      defaultVersion: "KJV",
    },
    title: "Received into the Family",
    content: `Salvation is more than a transaction; it's an adoption. When we receive Christ and believe in Him, we are given the right—the authority—to become children of God.

    Our identity shifts from outsider to family member, from orphan to heir. This intimate relationship with God as our Father is at the very heart of the salvation Jesus offers.`,
    prayer: `Heavenly Father, thank you for not just saving me, but for adopting me into your family. I am in awe that I can call you 'Father.' Help me to live today in the security and love of being your child. Amen.`,
    readingPlan: "John 1:1-18",
    reflection: [
      {
        id: "13-1",
        question:
          "What is the difference between seeing God as a distant judge and knowing Him as a loving Father?",
        placeholder: "Reflect on the relational aspect of salvation...",
      },
      {
        id: "13-2",
        question:
          "How does your identity as a 'child of God' influence your sense of worth and belonging?",
        placeholder: "Consider your source of identity...",
      },
      {
        id: "13-3",
        question:
          "What is one characteristic of a good father that you see in God?",
        placeholder: "Name a trait and thank Him for it...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      text: {
        NIV: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ,",
        ESV: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
        KJV: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:",
        NKJV: "Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ,",
        NASB: "Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ,",
      },
      reference: "Romans 5:1",
      defaultVersion: "KJV",
    },
    title: "Peace with God",
    content: `Because of our sin, we were once enemies of God, alienated from Him. But through faith in Christ, we are "justified"—declared righteous, just as if we'd never sinned.

    The primary result of this legal standing is peace. The war is over. The hostility is gone. We are reconciled to our Creator. This peace is not a feeling but a objective reality for everyone in Christ.`,
    prayer: `Lord Jesus, thank you for making peace between me and God through your sacrifice. I receive the reality of being declared righteous by faith. Help me to rest in this peace, even when my feelings are turbulent. Amen.`,
    readingPlan: "Romans 5:1-11",
    reflection: [
      {
        id: "14-1",
        question:
          "What was the cause of the hostility between humanity and God, and how did Jesus remove it?",
        placeholder: "Reflect on the cross as the solution...",
      },
      {
        id: "14-2",
        question:
          "How can you access the reality of this peace when you feel anxious or condemned?",
        placeholder: "Think about preaching the gospel to yourself...",
      },
      {
        id: "14-3",
        question:
          "How does being at peace with God free you to make peace with others?",
        placeholder: "Consider the overflow of reconciliation...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      text: {
        NIV: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die;'",
        ESV: "Jesus said to her, 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live,'",
        KJV: "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:",
        NKJV: "Jesus said to her, 'I am the resurrection and the life. He who believes in Me, though he may die, he shall live.'",
        NASB: "Jesus said to her, 'I am the resurrection and the life; the one who believes in Me will live, even if he dies,'",
      },
      reference: "John 11:25",
      defaultVersion: "KJV",
    },
    title: "Victory Over Death",
    content: `Christ's message of salvation isn't only for this life; it conquers our final enemy: death. Jesus doesn't just offer resurrection; He *is* the resurrection.

    For the believer, physical death is not the end but a transition into eternal life in God's presence. This hope changes how we live now and how we face the future without fear.`,
    prayer: `Jesus, you are my hope beyond the grave. Thank you for defeating death and promising that whoever believes in you will never truly die. Fix this hope in my heart and let it remove all fear. Amen.`,
    readingPlan: "John 11:17-44",
    reflection: [
      {
        id: "15-1",
        question:
          "How does the hope of resurrection change the way you view your own mortality?",
        placeholder: "Reflect on the Christian perspective on death...",
      },
      {
        id: "15-2",
        question:
          "What fears or anxieties about the future can be calmed by this promise?",
        placeholder: "Identify specific fears...",
      },
      {
        id: "15-3",
        question:
          "How does this eternal perspective influence your priorities for today?",
        placeholder: "Consider what truly matters...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      text: {
        NIV: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive in the Spirit.",
        ESV: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God, being put to death in the flesh but made alive in the spirit,",
        KJV: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit:",
        NKJV: "For Christ also suffered once for sins, the just for the unjust, that He might bring us to God, being put to death in the flesh but made alive by the Spirit,",
        NASB: "For Christ also suffered for sins once for all time, the just for the unjust, so that He might bring us to God, having been put to death in the flesh, but made alive in the spirit;",
      },
      reference: "1 Peter 3:18",
      defaultVersion: "KJV",
    },
    title: "Brought to God",
    content: `This verse is a perfect summary of the gospel. It tells us *who* (Christ), *what* (suffered for sins), *how* (the righteous for the unrighteous), and *why* (to bring you to God).

    The ultimate purpose of salvation is not just forgiveness or heaven, but reconciliation. The barrier of sin is removed, and we are brought near to God, into intimate relationship with Him.`,
    prayer: `Jesus, thank you for your once-for-all sacrifice. You took my place, the just for the unjust, to bring me to God. I am in awe of this love. Draw me near to the Father today. Amen.`,
    readingPlan: "1 Peter 3:13-22",
    reflection: [
      {
        id: "16-1",
        question: "What does it mean to you to be 'brought to God'?",
        placeholder: "Reflect on the privilege of access to God...",
      },
      {
        id: "16-2",
        question:
          "Why was it necessary for Jesus, the righteous one, to suffer for the unrighteous?",
        placeholder: "Consider the requirements of God's justice...",
      },
      {
        id: "16-3",
        question:
          "How can you intentionally draw near to God today, since the way has been opened?",
        placeholder: "Think about prayer, worship, or Scripture...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      text: {
        NIV: "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.",
        ESV: "And this is the testimony, that God gave us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.",
        KJV: "And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life.",
        NKJV: "And this is the testimony: that God has given us eternal life, and this life is in His Son. He who has the Son has life; he who does not have the Son of God does not have life.",
        NASB: "And the testimony is this, that God has given us eternal life, and this life is in His Son. The one who has the Son has the life; the one who does not have the Son of God does not have the life.",
      },
      reference: "1 John 5:11-12",
      defaultVersion: "KJV",
    },
    title: "The Simple Equation",
    content: `The message of salvation is presented here with stunning clarity. Eternal life is not a vague concept; it is a person—Jesus Christ. Therefore, possessing eternal life is not about having enough religion or goodness; it's about having a relationship with the Son.

    The equation is simple: Have the Son = Have life. No Son = No life. Our assurance rests entirely on whether we are in Christ.`,
    prayer: `Father, thank you for the clarity of your Word. I acknowledge that eternal life is found only in your Son, Jesus. I have Him by faith, and so I thank you that I have life—both now and forever. Amen.`,
    readingPlan: "1 John 5:6-13",
    reflection: [
      {
        id: "17-1",
        question: "How does this verse provide assurance for your salvation?",
        placeholder: "Reflect on the object of your faith: Christ himself...",
      },
      {
        id: "17-2",
        question:
          "Why is it comforting to know that eternal life is a person to know, not just a place to go?",
        placeholder: "Consider the relational nature of salvation...",
      },
      {
        id: "17-3",
        question:
          "How does having 'the Son' give you 'life' right now, in your present circumstances?",
        placeholder: "Think about hope, purpose, and strength for today...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      text: {
        NIV: "At that time people will see the Son of Man coming in clouds with great power and glory. And he will send his angels and gather his elect from the four winds, from the ends of the earth to the ends of the heavens.",
        ESV: "And then they will see the Son of Man coming in clouds with great power and glory. And then he will send out the angels and gather his elect from the four winds, from the end of the earth to the end of the heaven.",
        KJV: "And then shall they see the Son of man coming in the clouds with great power and glory. And then shall he send his angels, and shall gather together his elect from the four winds, from the uttermost part of the earth to the uttermost part of heaven.",
        NKJV: "Then they will see the Son of Man coming in the clouds with great power and glory. And then He will send His angels, and gather together His elect from the four winds, from the farthest part of earth to the farthest part of heaven.",
        NASB: "And then they will see the Son of Man coming in clouds with great power and glory. And then He will send forth the angels, and will gather together His elect from the four winds, from the farthest end of the earth to the farthest end of heaven.",
      },
      reference: "Mark 13:26-27",
      defaultVersion: "KJV",
    },
    title: "The Great Homecoming",
    content: `The Second Coming is not a hidden, secret event. It will be a glorious, universal, and triumphant revelation of the King. Christ will return not as a suffering servant but as a conquering King. His mission: to gather His people from every nation, tribe, and tongue. This is the great homecoming for which all creation groans. Every believer from every age will be united with Him, forever.`,
    prayer: `Lord Jesus, the thought of your glorious return takes my breath away. Thank you that your purpose is to gather, not to scatter; to redeem, not to destroy. I long for that day and find hope in the promise of being finally and fully gathered to you. Come, Lord Jesus. Amen.`,
    readingPlan: "Mark 13:24-37",
    reflection: [
      {
        id: "18-1",
        question:
          "What does the 'glorious' and powerful nature of Christ's return tell you about His character and ultimate victory?",
        placeholder:
          "Reflect on the contrast between His first and second coming...",
      },
      {
        id: "18-2",
        question:
          "How does the promise of being 'gathered' with all believers bring you comfort, especially when you feel isolated?",
        placeholder: "Think about the universal family of God...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      text: {
        NIV: "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ, who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body.",
        ESV: "But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ, who will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself.",
        KJV: "For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ: Who shall change our vile body, that it may be fashioned like unto his glorious body, according to the working whereby he is able even to subdue all things unto himself.",
        NKJV: "For our citizenship is in heaven, from which we also eagerly wait for the Savior, the Lord Jesus Christ, who will transform our lowly body that it may be conformed to His glorious body, according to the working by which He is able even to subdue all things to Himself.",
        NASB: "For our citizenship is in heaven, from which we also eagerly wait for a Savior, the Lord Jesus Christ; who will transform the body of our lowly condition into conformity with His glorious body, by the exertion of the power that He has even to subject all things to Himself.",
      },
      reference: "Philippians 3:20-21",
      defaultVersion: "KJV",
    },
    title: "Citizens of Heaven",
    content: `As believers, our primary identity is not tied to an earthly nation but to a heavenly kingdom. This world is not our home; we are ambassadors living abroad. The hope of the Second Coming reshapes our entire perspective. We aren't just waiting for an event; we are eagerly awaiting a Person—our Savior. And His return means the ultimate upgrade: our broken, mortal bodies will be exchanged for glorious, immortal, resurrection bodies like His.`,
    prayer: `Heavenly Father, help me to live today as a true citizen of heaven. When I get too comfortable or too distressed by this world, remind me that I am an ambassador for Christ, eagerly awaiting His return and the glorious transformation of all things. My hope is in you. Amen.`,
    readingPlan: "Philippians 3:17-21",
    reflection: [
      {
        id: "19-1",
        question:
          "What are some practical ways you can live as a 'citizen of heaven' in your daily routine?",
        placeholder: "Consider your values, speech, and priorities...",
      },
      {
        id: "19-2",
        question:
          "Why is the transformation of our physical bodies such a crucial part of our future hope?",
        placeholder: "Think about sickness, aging, and the effects of sin...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      text: {
        NIV: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first.",
        ESV: "For the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God. And the dead in Christ will rise first.",
        KJV: "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first.",
        NKJV: "For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first.",
        NASB: "For the Lord Himself will descend from heaven with a shout, with the voice of the archangel and with the trumpet of God, and the dead in Christ will rise first.",
      },
      reference: "1 Thessalonians 4:16",
      defaultVersion: "KJV",
    },
    title: "The Lord Himself",
    content: `The promise is emphatic: "the Lord himself." Our redemption will not be accomplished by a proxy or an angel. The One who loved us and gave Himself for us will personally return to complete our salvation. His descent will be announced with undeniable authority—a shout, a commanding voice, a divine trumpet. The first order of business: the resurrection of every believer who has died. Death's defeat will be made final and public.`,
    prayer: `Jesus, thank you that you are personally coming back for us. The same hands that were pierced for me will welcome me. Help me to live in the hope of the resurrection, knowing that because you live, I too will live with you. Amen.`,
    readingPlan: "1 Thessalonians 4:13-18",
    reflection: [
      {
        id: "20-1",
        question:
          "How does the truth that Jesus Himself is returning change your feelings about the future?",
        placeholder: "Reflect on the intimacy and certainty of this promise...",
      },
      {
        id: "20-2",
        question:
          "Why is the resurrection of believers who have died such a foundational Christian hope?",
        placeholder:
          "Consider the difference between a Christian and a non-Christian view of death...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      text: {
        NIV: "So Christ was sacrificed once to take away the sins of many; and he will appear a second time, not to bear sin, but to bring salvation to those who are waiting for him.",
        ESV: "So Christ, having been offered once to bear the sins of many, will appear a second time, not to deal with sin but to save those who are eagerly waiting for him.",
        KJV: "So Christ was once offered to bear the sins of many; and unto them that look for him shall he appear the second time without sin unto salvation.",
        NKJV: "So Christ was offered once to bear the sins of many. To those who eagerly wait for Him He will appear a second time, apart from sin, for salvation.",
        NASB: "So Christ also, having been offered once to bear the sins of many, will appear a second time for salvation without reference to sin, to those who eagerly await Him.",
      },
      reference: "Hebrews 9:28",
      defaultVersion: "KJV",
    },
    title: "Two Appearances",
    content: `The work of Christ is perfectly bookended by two appearances. His first appearance was to deal with the problem of sin through His sacrifice. His second appearance will have nothing to do with sin, for that work is finished. Instead, He will come to complete the salvation of His people—to rescue us fully from the very presence of sin and evil. Our posture is to be one of eager waiting, confident that the One who finished the work of redemption will return to finish our deliverance.`,
    prayer: `Savior, thank you that your work on the cross is completely sufficient. There is no more sacrifice for sin. I eagerly wait for your second appearance, not with fear, but with anticipation for the full salvation you will bring. Amen.`,
    readingPlan: "Hebrews 9:23-28",
    reflection: [
      {
        id: "21-1",
        question:
          "What is the difference between the purpose of Christ's first coming and His second coming?",
        placeholder: "Contrast 'dealing with sin' and 'bringing salvation'...",
      },
      {
        id: "21-2",
        question:
          "What does it look like to 'eagerly wait' for Him in a practical sense?",
        placeholder: "Think about hope, patience, and active service...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      text: {
        NIV: "Look, I come like a thief! Blessed is the one who stays awake and remains clothed, so as not to go naked and be shamefully exposed.",
        ESV: "Behold, I am coming like a thief! Blessed is the one who stays awake, keeping his garments on, that he may not go about naked and be seen exposed!",
        KJV: "Behold, I come as a thief. Blessed is he that watcheth, and keepeth his garments, lest he walk naked, and they see his shame.",
        NKJV: "Behold, I am coming as a thief. Blessed is he who watches, and keeps his garments, lest he walk naked and they see his shame.",
        NASB: "Behold, I am coming like a thief. Blessed is the one who stays awake and keeps his clothes, so that he will not walk about naked and people will not see his shame.",
      },
      reference: "Revelation 16:15",
      defaultVersion: "KJV",
    },
    title: "Staying Awake",
    content: `The timing of Christ's return will be unexpected, like a thief in the night. This is not meant to scare us, but to spur us to constant readiness. The blessing is for those who are spiritually "awake" and alert, living in a state of preparedness. To "keep our garments" is a metaphor for maintaining a life of holiness and obedience, so we are not caught in the shame of unfaithfulness when He suddenly appears.`,
    prayer: `Lord, keep my heart awake and alert. Guard me from spiritual drowsiness and the temptation to live as if you are never coming back. Clothe me in the righteousness of Christ and help me to live a life that is ready to meet you at any moment. Amen.`,
    readingPlan: "Revelation 16:12-16",
    reflection: [
      {
        id: "22-1",
        question:
          "What are the signs of being spiritually 'asleep' in your own life?",
        placeholder:
          "Consider complacency, unconfessed sin, or neglect of spiritual disciplines...",
      },
      {
        id: "22-2",
        question:
          "How can you practically 'keep your garments on'—maintain a life of holiness—today?",
        placeholder: "Think about specific choices you can make...",
      },
    ],
  },
  {
    id: "23",
    date: getDevotionalDate("23"),
    verse: {
      text: {
        NIV: "Then I saw heaven standing open, and there before me was a white horse, whose rider is called Faithful and True. With justice he judges and wages war.",
        ESV: "Then I saw heaven opened, and behold, a white horse! The one sitting on it is called Faithful and True, and in righteousness he judges and makes war.",
        KJV: "And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.",
        NKJV: "Now I saw heaven opened, and behold, a white horse. And He who sat on him was called Faithful and True, and in righteousness He judges and makes war.",
        NASB: "And I saw heaven opened, and behold, a white horse, and He who sat on it is called Faithful and True, and in righteousness He judges and wages war.",
      },
      reference: "Revelation 19:11",
      defaultVersion: "KJV",
    },
    title: "Faithful and True",
    content: `The book of Revelation pulls back the curtain on the cosmic reality of Christ's return. He is not just a gentle shepherd; He is a divine warrior King. His names reveal His character: He is "Faithful" to fulfill every promise and "True" in contrast to all the lies and deception of the enemy. His mission is to finally and completely establish God's righteous justice on earth, judging evil and waging a victorious war against it.`,
    prayer: `Faithful and True King, I am in awe of your power and majesty. In a world full of injustice and falsehood, I find deep comfort in knowing that you will one day set everything right. I trust in your perfect justice and your faithful promises. Amen.`,
    readingPlan: "Revelation 19:11-16",
    reflection: [
      {
        id: "23-1",
        question:
          "How does the image of Jesus as a warrior King complement the image of Jesus as a suffering servant?",
        placeholder:
          "Reflect on the different aspects of His character and mission...",
      },
      {
        id: "23-2",
        question:
          "Why is it important that judgment is in the hands of One who is both 'Faithful and True'?",
        placeholder:
          "Consider the alternative—fallible or corrupt human judgment...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      text: {
        NIV: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
        ESV: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.",
        KJV: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.",
        NKJV: "And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying. There shall be no more pain, for the former things have passed away.",
        NASB: "and He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away.",
      },
      reference: "Revelation 21:4",
      defaultVersion: "KJV",
    },
    title: "The End of Tears",
    content: `The hope of the Second Coming is not merely about escaping this world, but about the ushering in of a new and perfect reality. The culmination of Christ's return is a restored creation where every source of human sorrow is utterly abolished. God Himself will personally comfort His people, tenderly wiping away every tear. This is the ultimate destination: a place where the brokenness of the "old order" is replaced by the shalom of the new.`,
    prayer: `God of all comfort, I hold onto this promise today. When I experience grief, pain, and loss, remind me that these are temporary realities of a broken world. Thank you that a day is coming when you will personally wipe away my tears forever. I long for that day. Amen.`,
    readingPlan: "Revelation 21:1-7",
    reflection: [
      {
        id: "24-1",
        question:
          "Which of the things promised to pass away (death, mourning, crying, pain) resonates most with you today?",
        placeholder: "Be honest about your current struggles...",
      },
      {
        id: "24-2",
        question:
          "How does the promise of a future without pain change how you navigate pain in the present?",
        placeholder: "Think about endurance, perspective, and hope...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      text: {
        NIV: "You also must be ready, because the Son of Man will come at an hour when you do not expect him.",
        ESV: "You also must be ready, for the Son of Man is coming at an hour you do not expect.",
        KJV: "Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.",
        NKJV: "Therefore you also be ready, for the Son of Man is coming at an hour you do not expect.",
        NASB: "You too, be ready; for the Son of Man is coming at an hour that you do not expect.",
      },
      reference: "Luke 12:40",
      defaultVersion: "KJV",
    },
    title: "The Unexpected Hour",
    content: `Jesus emphasizes the unpredictability of His return. It is a certainty, but its timing is a divine secret. This teaching is a call to constant vigilance, not frantic date-setting. Readiness is not about calculating timelines but about cultivating a faithful life. It is the daily, consistent practice of following Jesus, so that whenever He comes, He finds us doing what He has called us to do.`,
    prayer: `Lord, protect me from both obsession with prophecy and indifference to your return. Help me to live in a state of healthy readiness—faithful in my responsibilities, passionate in my worship, and earnest in my love for others, today and every day. Amen.`,
    readingPlan: "Luke 12:35-40",
    reflection: [
      {
        id: "25-1",
        question: "What does a 'ready' life look like on an ordinary Tuesday?",
        placeholder: "Think about attitudes, actions, and priorities...",
      },
      {
        id: "25-2",
        question:
          "Why do you think God has chosen to keep the timing of Christ's return a secret?",
        placeholder: "Reflect on how it affects our faith and daily living...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      text: {
        NIV: "For the grace of God has appeared that offers salvation to all people. It teaches us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age, while we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ.",
        ESV: "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ.",
        KJV: "For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world; Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ;",
        NKJV: "For the grace of God that brings salvation has appeared to all men, teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly in the present age, looking for the blessed hope and glorious appearing of our great God and Savior Jesus Christ,",
        NASB: "For the grace of God has appeared, bringing salvation to all people, instructing us to deny ungodliness and worldly desires and to live sensibly, righteously, and in a godly manner in the present age, as we look for the blessed hope and the appearing of the glory of our great God and Savior, Jesus Christ.",
      },
      reference: "Titus 2:11-13",
      defaultVersion: "KJV",
    },
    title: "The Blessed Hope",
    content: `The Second Coming is called the "blessed hope." It is not a source of fear, but of joyful anticipation. This hope is not passive; it is dynamically connected to how we live now. God's grace, which saved us, is also actively training us to reject sin and live godly lives. Our waiting for Christ's glorious appearing should be the motivating force behind our pursuit of holiness.`,
    prayer: `Gracious God, thank you that my hope is not a vague wish but a sure promise. Let the certain return of Jesus train my heart today. Empower me by your Spirit to say 'no' to sin and 'yes' to a life that reflects your goodness, as I look forward to that glorious day. Amen.`,
    readingPlan: "Titus 2:11-14",
    reflection: [
      {
        id: "26-1",
        question:
          "In what way is the Second Coming a 'blessed hope' for you personally?",
        placeholder: "Reflect on what you are most looking forward to...",
      },
      {
        id: "26-2",
        question:
          "How does the hope of Christ's return provide motivation for saying 'no' to a specific temptation?",
        placeholder: "Apply this to a real struggle you face...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      text: {
        NIV: "Yes, I am coming soon. Amen. Come, Lord Jesus.",
        ESV: "Surely I am coming soon. Amen. Come, Lord Jesus!",
        KJV: "Surely I come quickly. Amen. Even so, come, Lord Jesus.",
        NKJV: "Surely I am coming quickly. Amen. Even so, come, Lord Jesus!",
        NASB: "Yes, I am coming quickly. Amen. Come, Lord Jesus.",
      },
      reference: "Revelation 22:20",
      defaultVersion: "KJV",
    },
    title: "The Final Prayer",
    content: `The Bible ends not with a whimper, but with a promise and a prayer. The promise comes from Jesus: "I am coming soon." The prayer comes from the church—the appropriate response of every believer across history: "Come, Lord Jesus." This is the cry of a bride yearning for her Groom. It is an expression of hope, love, and longing. To pray this prayer is to align our deepest desires with God's ultimate plan.`,
    prayer: `Jesus, your final promise echoes in my heart: "I am coming soon." Until that day, my prayer is the prayer of your church: Come, Lord Jesus. Come into my world today. Come into my struggles. Come and finally make all things new. Amen. Come, Lord Jesus.`,
    readingPlan: "Revelation 22:6-21",
    reflection: [
      {
        id: "27-1",
        question:
          "What does it mean for you to personally pray, 'Come, Lord Jesus' today?",
        placeholder: "Consider what you are inviting Him into...",
      },
      {
        id: "27-2",
        question:
          "How does this final promise and prayer shape your understanding of the entire biblical story?",
        placeholder: "See it as the climax toward which everything points...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      text: {
        NIV: "The Lord is my shepherd, I lack nothing.",
        ESV: "The Lord is my shepherd; I shall not want.",
        KJV: "The Lord is my shepherd; I shall not want.",
        NKJV: "The Lord is my shepherd; I shall not want.",
        NASB: "The Lord is my shepherd, I will not lack.",
      },
      reference: "Psalm 23:1",
      defaultVersion: "KJV",
    },
    title: "The Shepherd's Provision",
    content: `In a world of striving and scarcity, the psalmist's declaration is a radical act of trust. To say "I lack nothing" is not a claim about material abundance but a confession of faith in the Shepherd's care. When we follow His lead, we discover that true contentment comes not from what we possess, but from who walks with us through every valley and mountain.`,
    prayer: `Shepherd of my soul, teach me to trust your provision. When anxiety whispers of lack, help me remember your faithfulness. Guide me to green pastures and still waters, and remind my heart that in your presence, I have everything I need. Amen.`,
    readingPlan: "Psalm 23",
    reflection: [
      {
        id: "28-1",
        question:
          "Where do you need to trust God's provision in your life today?",
        placeholder: "Name specific areas of worry or need...",
      },
      {
        id: "28-2",
        question:
          "How does remembering God as your shepherd change your perspective on 'enough'?",
        placeholder: "Consider spiritual vs. material abundance...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      text: {
        NIV: "Be still, and know that I am God.",
        ESV: "Be still, and know that I am God.",
        KJV: "Be still, and know that I am God.",
        NKJV: "Be still, and know that I am God.",
        NASB: "Cease striving and know that I am God.",
      },
      reference: "Psalm 46:10",
      defaultVersion: "KJV",
    },
    title: "The Stillness of Knowing",
    content: `God’s command to "be still" is an invitation to relinquish our frantic striving and acknowledge His sovereignty. In the silence, we exchange our anxieties for awe, our worries for worship. This stillness is not passive inaction but active trust—a deliberate pause to remember that the same God who holds mountains in place holds our tomorrows.`,
    prayer: `God of all peace, quiet my heart before you. Forgive my restless striving and help me to cease relying on my own strength. In the stillness, give me a fresh revelation of who you are. Amen.`,
    readingPlan: "Psalm 46",
    reflection: [
      {
        id: "29-1",
        question:
          "What areas of your life require you to 'cease striving' and trust God?",
        placeholder:
          "Identify situations where you're relying on self-effort...",
      },
      {
        id: "29-2",
        question:
          "How can you practically create space for stillness with God this week?",
        placeholder: "Consider time, location, and distractions...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      text: {
        NIV: "And now these three remain: faith, hope and love. But the greatest of these is love.",
        ESV: "So now faith, hope, and love abide, these three; but the greatest of these is love.",
        KJV: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
        NKJV: "And now abide faith, hope, love, these three; but the greatest of these is love.",
        NASB: "But now faith, hope, and love remain, these three; but the greatest of these is love.",
      },
      reference: "1 Corinthians 13:13",
      defaultVersion: "KJV",
    },
    title: "The Greatest Thing",
    content: `In the economy of God’s kingdom, love is the eternal currency. Faith will become sight, hope will be fulfilled, but love will never end. This perfect love—sacrificial, steadfast, and unconditional—is both our destination and our journey. It is the mark of Christ’s followers and the ultimate evidence of His Spirit within us.`,
    prayer: `Lord Jesus, teach me to love as you love. Where I am weak, fill me with your Spirit. Help me to prioritize love above gifts, achievements, or knowledge. May my life reflect the greatest thing—your eternal love. Amen.`,
    readingPlan: "1 Corinthians 13",
    reflection: [
      {
        id: "30-1",
        question:
          "How can you intentionally prioritize love in your relationships this week?",
        placeholder: "Think of specific actions or attitudes...",
      },
      {
        id: "30-2",
        question:
          "Why do you think love is described as 'greater' than faith or hope?",
        placeholder: "Consider God's nature and eternity...",
      },
    ],
  },
];
