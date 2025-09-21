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
