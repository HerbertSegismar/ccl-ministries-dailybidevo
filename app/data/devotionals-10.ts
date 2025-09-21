// src/data/devotionals.ts
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
      reference: "Isaiah 41:10",
      defaultVersion: "KJV",
    },
    title: "Do Not Fear, For I Am With You",
    content: `Anxiety and fear are common human experiences, but God's Word meets us in the midst of them with a powerful promise of His presence. This verse isn't a simplistic command to "stop being afraid"; it is an invitation to replace our fear with the concrete reality of who God is.

      He gives us five specific promises: He is *with* us, He is *our* God, He will *strengthen* us, He will *help* us, and He will *uphold* us. His presence is active and powerful, not passive. When we feel weak and on the verge of falling, His righteous right hand is there to keep us steady.

      Today, consider what fears or sources of dismay you are facing. How can the truth of God's steadfast presence change your perspective?`,
    prayer: `Lord God, thank you that you are always with me. When fear and anxiety rise up, help me to hear your voice saying, "Do not be dismayed, for I am your God." I choose to trust in your strength today, not my own. Uphold me by your righteous right hand. Amen.`,
    readingPlan: "Isaiah 40-41",
    reflection: [
      {
        id: "1-1",
        question:
          "What situation or worry is currently causing you fear or dismay?",
        placeholder: "Name it honestly before God...",
      },
      {
        id: "1-2",
        question:
          "Which of God's five promises in this verse is most meaningful to you right now?",
        placeholder: "e.g., 'I will help you' or 'I will uphold you'...",
      },
      {
        id: "1-3",
        question:
          "What is one practical step you can take to choose faith over fear today?",
        placeholder: "Describe what that step might look like...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      reference: "Philippians 4:6",
      defaultVersion: "KJV",
    },
    title: "Peace in Prayer",
    content: `Anxiety can creep into our lives in many ways—through worries about health, relationships, finances, or the future. But God invites us to bring every concern to Him in prayer.

      Notice that this verse doesn't say "some things" but "everything." No concern is too small or too big for God. The key is approaching Him with thanksgiving, remembering His faithfulness in the past as we present our current requests.

      Today, when anxiety arises, let it be a prompt to pray rather than to worry.`,
    prayer: `Lord, I bring my anxieties to You today. Help me to remember Your faithfulness and to approach You with a thankful heart, trusting that You care about every detail of my life. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "2-1",
        question: "What anxieties are weighing on your heart today?",
        placeholder: "Name them specifically...",
      },
      {
        id: "2-2",
        question: "How has God been faithful to you in the past?",
        placeholder: "Recall specific instances...",
      },
      {
        id: "2-3",
        question: "What would it look like to replace worry with prayer today?",
        placeholder: "Describe practical steps...",
      },
    ],
  },
  {
    id: "3",
    date: getDevotionalDate("3"),
    verse: {
      reference: "Proverbs 3:5-6",
      defaultVersion: "KJV",
    },
    title: "Trust Over Understanding",
    content: `Human understanding is limited, but God's wisdom is infinite. These verses invite us to trust God completely, even when we can't see the full picture or understand His ways.

      Leaning on our own understanding often leads to anxiety and confusion. But trusting in God's character and sovereignty brings peace and direction.

      Where is God calling you to trust Him rather than relying on your limited perspective?`,
    prayer: `Heavenly Father, I confess that I often try to figure things out on my own. Help me to trust You with all my heart and to acknowledge You in all my ways. Direct my paths according to Your perfect will. Amen.`,
    readingPlan: "Proverbs 3",
    reflection: [
      {
        id: "3-1",
        question: "Where are you currently leaning on your own understanding?",
        placeholder: "Identify specific areas...",
      },
      {
        id: "3-2",
        question:
          "What would it look like to trust God more fully in this situation?",
        placeholder: "Describe practical steps of trust...",
      },
      {
        id: "3-3",
        question:
          "How has God directed your paths in the past when you trusted Him?",
        placeholder: "Recall specific examples...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      reference: "Proverbs 4:23",
      defaultVersion: "KJV",
    },
    title: "Guard Your Heart",
    content: `Our heart—the core of our emotions, thoughts, and will—is the wellspring of our life. What we allow to reside there inevitably shapes our actions, words, and decisions.

      This verse is a call to vigilant protection. It urges us to be intentional about what we watch, listen to, and dwell on. Protecting our heart isn't about building walls but about nurturing its connection to God, the true source of living water.

      What influences do you need to filter out? What truth do you need to let in to keep your heart healthy and aligned with God?`,
    prayer: `Lord, my heart is so easily influenced by the world. Give me wisdom and discernment to guard it diligently. Help me to fill it with Your truth and Your love, so that my life may flow from a pure and faithful source. Amen.`,
    readingPlan: "Proverbs 4",
    reflection: [
      {
        id: "4-1",
        question:
          "What are the primary influences (media, relationships, etc.) that are shaping your heart right now?",
        placeholder: "List them honestly...",
      },
      {
        id: "4-2",
        question:
          "What is one practical way you can better guard your heart this week?",
        placeholder: "e.g., setting a boundary, starting a new habit...",
      },
      {
        id: "4-3",
        question:
          "What does a 'well-kept heart' producing good fruit look like in your daily life?",
        placeholder: "Describe the attitudes and actions...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      reference: "Proverbs 3:9-10",
      defaultVersion: "KJV",
    },
    title: "The Firstfruits Principle",
    content: `God doesn't ask for our leftovers. He asks for our first and our best. This principle of giving the "firstfruits" is a tangible act of trust that declares God is our ultimate provider, not our wealth or our own effort.

      It reverses our natural instinct. Instead of seeing what we have and then deciding if we can give God a portion, we are called to give to Him first, trusting that He will provide for all that comes after.

      Honoring God with our resources is less about a transaction and more about a transformation of the heart, placing Him in His rightful position of Lord over all we have.`,
    prayer: `Father, everything I have is a gift from You. Forgive me for the times I have clung tightly to my possessions. Help me to honor You first with my finances, my time, and my talents, trusting You completely to meet my every need. Amen.`,
    readingPlan: "Proverbs 3 (re-read v9-10)",
    reflection: [
      {
        id: "5-1",
        question:
          "In what ways do you currently honor the Lord with your wealth (time, talent, treasure)?",
        placeholder: "Be specific...",
      },
      {
        id: "5-2",
        question:
          "What would it look like to give God the 'firstfruits' in a new area of your life?",
        placeholder: "Consider your schedule, income, or gifts...",
      },
      {
        id: "5-3",
        question:
          "How does giving first act as an antidote to anxiety about your future needs?",
        placeholder:
          "Reflect on the connection between trust and generosity...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      reference: "Proverbs 9:10",
      defaultVersion: "KJV",
    },
    title: "The Foundation of Wisdom",
    content: `All true wisdom finds its source in a right relationship with God. "The fear of the Lord" is not about being terrified, but about holding Him in reverent awe. It is acknowledging His holiness, power, and authority, and living in light of that reality.

      This is the starting point. Worldly knowledge can be accumulated, but godly wisdom is received. It begins when we humble ourselves before God, recognizing that His ways are higher than ours.

      Pursuing knowledge without this foundation leads to pride. Pursuing wisdom with this foundation leads to a life of purpose, clarity, and grace.`,
    prayer: `Holy God, I stand in awe of You. Forgive me for seeking wisdom from the world without first coming to You. Be the foundation of all my understanding. Let my knowledge of who You are shape every thought and decision I make today. Amen.`,
    readingPlan: "Proverbs 9",
    reflection: [
      {
        id: "6-1",
        question:
          "How would you define 'the fear of the Lord' in your own words?",
        placeholder: "Describe what it looks like in daily life...",
      },
      {
        id: "6-2",
        question:
          "What's the difference between having knowledge and having wisdom?",
        placeholder: "Think of an example...",
      },
      {
        id: "6-3",
        question:
          "How can you cultivate a heart of 'reverent awe' for God this week?",
        placeholder:
          "Consider prayer, worship, or meditation on His character...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      reference: "Proverbs 15:1",
      defaultVersion: "KJV",
    },
    title: "The Power of a Gentle Answer",
    content: `Conflict is inevitable, but escalation is a choice. This proverb reveals the incredible power we hold in our responses. A gentle, soft, or thoughtful answer has the power to defuse tension and create space for peace.

      Our natural reaction when attacked is to retaliate—to match anger with anger. But God's way is counter-intuitive: overcome evil with good, and harshness with gentleness. This requires Spirit-led self-control and a heart that seeks peace over winning an argument.

      Your words today can either be a spark that ignites a fire or water that cools a flame.`,
    prayer: `Lord, I need Your help to control my tongue. When I am provoked, fill me with Your Spirit so that my first response is gentleness and grace, not harshness and pride. Let my words be life-giving and peace-making. Amen.`,
    readingPlan: "Proverbs 15",
    reflection: [
      {
        id: "7-1",
        question:
          "Recall a recent conflict. Was your response a 'gentle answer' or a 'harsh word'?",
        placeholder: "Reflect on the outcome...",
      },
      {
        id: "7-2",
        question:
          "Why is it so difficult to respond with gentleness when we feel wronged?",
        placeholder: "Consider the role of pride and emotion...",
      },
      {
        id: "7-3",
        question:
          "What is one situation upcoming where you can prepare to give a gentle answer?",
        placeholder: "Plan your response...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      reference: "Proverbs 18:10",
      defaultVersion: "KJV",
    },
    title: "Your Strong Tower",
    content: `In ancient times, a strong tower was a place of refuge and defense against any enemy. This verse offers a breathtaking image: God Himself is our ultimate place of safety.

      His "name" represents His entire character—His faithfulness, power, love, and mercy. When fear, anxiety, or trouble comes, we aren't called to stand and fight in our own strength. We are invited to run. To turn away from the threat and sprint toward the safety of His presence.

      Where do you need to run to Him today? You are not just hiding; you are finding true security in the unshakable character of God.`,
    prayer: `Lord, You are my refuge and my strength. When I am afraid or overwhelmed, remind my heart to run to You. Thank you that in Your presence, I find true safety and peace that the world cannot give. I trust in Your mighty name. Amen.`,
    readingPlan: "Proverbs 18",
    reflection: [
      {
        id: "8-1",
        question:
          "What 'enemy' are you facing right now that you need to take refuge from? (e.g., fear, anxiety, condemnation, a person)",
        placeholder: "Name it...",
      },
      {
        id: "8-2",
        question:
          "What does it practically look like for you to 'run into' the name of the Lord?",
        placeholder: "e.g., prayer, worship, reading Scripture...",
      },
      {
        id: "8-3",
        question:
          "How does remembering God's character (His name) change your perspective on your problem?",
        placeholder: "Compare your problem to His power...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      reference: "Proverbs 3:5-6",
      defaultVersion: "KJV",
    },
    title: "The Path Maker",
    content: `Our own understanding is limited, shaped by our fears, past experiences, and finite perspective. God's understanding is infinite. This famous proverb isn't a call to abandon intellect, but to place our confidence in a Person, not our own perception of the problem.

text
  Trusting with "all your heart" is an active surrender. It's choosing to believe that God is good and sovereign even when the path ahead is foggy. As we acknowledge Him in every decision—big and small—we release the burden of figuring it all out ourselves. He promises to clear the way, not necessarily the easiest way, but the right one.`,
    prayer: `Father, I confess I often rely on my own limited understanding. Today, I choose to trust You with all my heart. I submit my plans, my worries, and my dreams to You. Please guide my steps and make my path straight, for Your glory. Amen.`,
    readingPlan: "Proverbs 3",
    reflection: [
      {
        id: "9-1",
        question:
          "What situation are you currently trying to 'figure out' on your own?",
        placeholder: "Describe it simply...",
      },
      {
        id: "9-2",
        question:
          "What would it look like to actively 'acknowledge Him' in that situation today?",
        placeholder: "A practical step of trust...",
      },
      {
        id: "9-3",
        question:
          "How does it feel to release the burden of needing to understand everything?",
        placeholder: "e.g., relief, anxiety, freedom...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      reference: "Philippians 4:13",
      defaultVersion: "KJV",
    },
    title: "Strength for the Journey",
    content: `This verse is often quoted for athletic achievements, but its context is one of profound contentment. Paul wrote this from prison, having learned the secret of being content in plenty and in want. The "all things" is the ability to endure any circumstance through the strength Christ provides.

text
  It's not a promise of superhuman ability to achieve personal goals, but a declaration of divine empowerment to withstand life's highs and lows. His strength is made perfect in our weakness. Whether you are facing a great challenge or a deep need, the same power that sustained Paul is available to you today.`,
    prayer: `Lord Jesus, I admit my weakness and my need for You. Thank you that Your power is made perfect in my inability. Strengthen me today not just to achieve, but to endure, to be content, and to remain faithful in every circumstance I face. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "10-1",
        question:
          "In what area of your life do you feel weak or insufficient right now?",
        placeholder: "Be honest...",
      },
      {
        id: "10-2",
        question:
          "How can you shift your focus from achieving a result to relying on Christ's strength in the process?",
        placeholder: "A shift in perspective...",
      },
      {
        id: "10-3",
        question:
          "What does 'contentment' look like for you in your current season?",
        placeholder: "It's more than happiness...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      reference: "Philippians 4:6",
      defaultVersion: "KJV",
    },
    title: "The Antidote to Anxiety",
    content: `Anxiety is a natural human response, but it doesn't have to be our master. This verse gives us a divine alternative: intentional prayer. Notice the progression. We are to replace anxiety not with nothing, but with something—a conscious turning to God.

text
  "Prayer and petition" is about honestly sharing our worries with Him. The key ingredient is "thanksgiving." Gratitude reorients our heart from what we lack to what we already have in God. It shifts our focus from the size of our problem to the greatness of our God. You are invited to transfer the weight of your anxiety into His capable hands.`,
    prayer: `Heavenly Father, I come to You with the things that make me anxious. I choose to turn my worries into prayers. Thank You for Your past faithfulness, Your present help, and Your future promises. I place my trust in You. Amen.`,
    readingPlan: "Philippians 4",
    reflection: [
      {
        id: "11-1",
        question:
          "What is one specific thing you are feeling anxious about today?",
        placeholder: "Name it clearly...",
      },
      {
        id: "11-2",
        question:
          "What is one thing you can thank God for, even in the middle of this anxious situation?",
        placeholder: "Look for a glimmer of good...",
      },
      {
        id: "11-3",
        question:
          "How does verbally 'presenting your request' to God change your relationship to that anxiety?",
        placeholder: "e.g., it externalizes it, it shares the burden...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      reference: "Psalm 119:105",
      defaultVersion: "KJV",
    },
    title: "Light for the Next Step",
    content: `In the ancient world, a small oil lamp provided just enough light to see the next step on a dark, treacherous path. God's Word often functions the same way for us. We may want a floodlight illuminating the next ten years, but God faithfully gives us enough light for the next step.

text
  This requires daily engagement with Scripture. We don't charge up on Sunday for the whole week; we need daily manna. His Word provides guidance, warning, and comfort for the immediate decisions and challenges we face. Trust that the light for your next step is always available in Him.`,
    prayer: `Lord, thank You for the gift of Your Word. Forgive me for the times I seek a full blueprint instead of trusting You for the next step. Help me to consistently come to Scripture, allowing it to guide my decisions and illuminate my path today. Amen.`,
    readingPlan: "Psalm 119:105-112",
    reflection: [
      {
        id: "12-1",
        question: "What part of your 'path' feels dark or uncertain right now?",
        placeholder: "A relationship, a decision, the future...",
      },
      {
        id: "12-2",
        question:
          "What is the 'next step' that God is clearly lighting up for you?",
        placeholder: "It might be simple: pray, wait, call someone, rest...",
      },
      {
        id: "12-3",
        question:
          "How can you make time to regularly engage with God's lamp (His Word)?",
        placeholder: "A practical plan...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      reference: "Matthew 11:28",
      defaultVersion: "KJV",
    },
    title: "The Gift of Rest",
    content: `This is one of the most tender invitations in all of Scripture. Jesus doesn't stand at a distance and shout instructions. He draws near and offers Himself as the solution to our soul-deep exhaustion. The rest He offers is more than a nap; it's a rest of the soul—a ceasing from striving, performing, and earning.

text
  The qualification for receiving this rest is simply to come. To acknowledge our weariness and burden. You don't need to clean yourself up first. You just need to come, exactly as you are, and transfer the weight of your burdens to the One who is gentle and humble in heart.`,
    prayer: `Jesus, I come to You today. I am weary and burdened from [name it]. I lay these burdens down at Your feet. I receive the rest You freely offer. Teach me to walk in Your easy yoke and light burden. Thank you for Your kindness. Amen.`,
    readingPlan: "Matthew 11:25-30",
    reflection: [
      {
        id: "13-1",
        question: "What is causing you to feel 'weary and burdened' today?",
        placeholder: "Be specific...",
      },
      {
        id: "13-2",
        question:
          "What does it feel like to truly 'come' to Jesus without pretense?",
        placeholder: "e.g., vulnerable, relieving, difficult...",
      },
      {
        id: "13-3",
        question:
          "What is one burden you can consciously choose to hand over to Him right now?",
        placeholder: "Visualize placing it at His feet...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      reference: "Romans 8:28",
      defaultVersion: "KJV",
    },
    title: "The Weaver of Good",
    content: `This is not a promise that all things are good. Evil, pain, and suffering are very real. This is a promise that God is so powerful and sovereign that He can weave every thread of our lives—even the painful, dark, and confusing ones—into a tapestry of ultimate good.

text
  This good is defined by His purpose: to conform us to the image of His Son. He doesn't waste a single experience. Our part is to trust the Weaver even when we can only see the tangled threads underneath. Our confidence is not in a formula, but in the faithful character of a God who is always at work for our eternal good.`,
    prayer: `God, I confess that I don't always see how good can come from my current struggles. I choose to trust Your character and Your promise. Help me to believe that You are working even now, weaving all things together for my good and Your glory. Amen.`,
    readingPlan: "Romans 8:26-30",
    reflection: [
      {
        id: "14-1",
        question:
          "What is one 'thing' in your life that is hard to see any good in?",
        placeholder: "A past event, a present hardship...",
      },
      {
        id: "14-2",
        question:
          "How does defining 'good' as becoming more like Jesus change your view of this promise?",
        placeholder: "It's not necessarily comfort or ease...",
      },
      {
        id: "14-3",
        question:
          "How can trusting this truth change how you walk through difficulty today?",
        placeholder: "It provides hope, not a quick fix...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      reference: "Psalm 46:10",
      defaultVersion: "KJV",
    },
    title: "The Practice of Stillness",
    content: `In our busy world, stillness is countercultural. Yet God calls us to be still and recognize His sovereignty. This isn't about physical inactivity but about quieting our souls before Him.

      When we still our hearts, we create space to remember who God is—the Almighty, sovereign Lord over all creation. This perspective puts our problems in their proper place.

      Today, carve out moments of stillness to simply be with God and acknowledge His majesty.`,
    prayer: `God, help me to be still before You today. Quiet my heart and mind so that I can truly know You as God. May Your presence put everything else in perspective. Amen.`,
    readingPlan: "Psalm 46",
    reflection: [
      {
        id: "15-1",
        question: "What makes it difficult for you to be still before God?",
        placeholder: "Identify obstacles...",
      },
      {
        id: "15-2",
        question:
          "What happens in your spirit when you intentionally practice stillness?",
        placeholder: "Describe your experience...",
      },
      {
        id: "15-3",
        question:
          "How does remembering God's sovereignty change your perspective on current challenges?",
        placeholder: "Reflect on this...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      reference: "Proverbs 3:5",
      defaultVersion: "KJV",
    },
    title: "The Wisdom of Trust",
    content: `True wisdom begins when we release our need to understand everything and instead place our confidence in God's character. Human understanding is limited, but God's perspective is eternal.

    Trusting God doesn't mean abandoning reason—it means acknowledging that His wisdom surpasses ours. When we choose to trust despite uncertainty, we invite God's guidance into our situations.

    Consider areas where you've been relying on your own understanding. How might you practice active trust today?`,
    prayer: `Father, I choose to trust You beyond what I can see or understand. Help me to rely on Your wisdom rather than my limited perspective. Guide my steps today. Amen.`,
    readingPlan: "Proverbs 3:1-8",
    reflection: [
      {
        id: "16-1",
        question: "Where are you currently struggling to trust God's wisdom?",
        placeholder: "Name the situation...",
      },
      {
        id: "16-2",
        question:
          "How has God proven faithful in your past when you trusted Him?",
        placeholder: "Recall specific examples...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      reference: "Psalm 28:7",
      defaultVersion: "KJV",
    },
    title: "Divine Protection",
    content: `In seasons of vulnerability, God offers Himself as both strength and shield. His protection isn't always visible to our eyes, but it is constantly active in the spiritual realm.

    When we feel exposed to life's battles, we can take refuge in His presence. Our trust activates His helping hand—not merely as a distant observer but as an active participant in our struggles.

    Whatever you face today, remember that God is both your sustainer and protector.`,
    prayer: `Lord, thank you for being my strength and shield. I take refuge in You today. Help me to sense Your protection and empowering presence. Amen.`,
    readingPlan: "Psalm 28",
    reflection: [
      {
        id: "17-1",
        question: "What makes you feel vulnerable or exposed right now?",
        placeholder: "Describe your concerns...",
      },
      {
        id: "17-2",
        question:
          "How have you experienced God's protection in unexpected ways?",
        placeholder: "Share your story...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      reference: "Isaiah 40:31",
      defaultVersion: "KJV",
    },
    title: "Renewed Strength",
    content: `Waiting isn't passive—it's an active posture of hopeful expectation. God promises to renew those who fix their hope on Him, exchanging weariness for divine energy.

    Like eagles catching thermal currents, we can rise above life's struggles when we tap into God's strength. This renewal isn't just physical; it encompasses emotional and spiritual revitalization.

    If you feel weary today, position yourself in hopeful waiting before God.`,
    prayer: `God, I place my hope in You. Renew my strength and help me to rise above my circumstances through Your empowering Spirit. Amen.`,
    readingPlan: "Isaiah 40:28-31",
    reflection: [
      {
        id: "18-1",
        question:
          "In what area of your life do you need renewed strength most?",
        placeholder: "Be specific...",
      },
      {
        id: "18-2",
        question:
          "What does 'waiting on the Lord' look like practically for you?",
        placeholder: "Describe your practice...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      reference: "Romans 8:38-39",
      defaultVersion: "KJV",
    },
    title: "Unbreakable Love",
    content: `God's love isn't based on our performance or circumstances. It's a steadfast, unbreakable reality that surrounds us even when we feel unworthy or alone.

    No failure, no crisis, no spiritual attack can diminish His love. This truth doesn't eliminate life's challenges, but it gives us an unshakable foundation amid them.

    Whatever tries to convince you of God's absence today, remember: His love holds you securely.`,
    prayer: `Father, thank you for Your inseparable love. Help me to live securely in this truth, especially when I feel unworthy or distant from You. Amen.`,
    readingPlan: "Romans 8:31-39",
    reflection: [
      {
        id: "19-1",
        question: "What sometimes makes you doubt God's love?",
        placeholder: "Identify the lies...",
      },
      {
        id: "19-2",
        question:
          "How would living in the security of God's love change your day?",
        placeholder: "Imagine the difference...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      reference: "Hebrews 4:16",
      defaultVersion: "KJV",
    },
    title: "Throne of Grace",
    content: `God doesn't expect us to have it all together before we approach Him. His throne is characterized by grace—not judgment—where we find mercy exactly when we need it most.

    We can come boldly, not because of our perfection, but because of Christ's sacrifice. Here we exchange our weaknesses for His strength, our failures for His forgiveness.

    Whatever need you carry today, bring it confidently to His throne.`,
    prayer: `Jesus, thank you for making a way for me to approach God. I come to Your throne today, receiving Your mercy and grace for my needs. Amen.`,
    readingPlan: "Hebrews 4:14-16",
    reflection: [
      {
        id: "20-1",
        question: "What need do you need to bring to God's throne today?",
        placeholder: "Name it honestly...",
      },
      {
        id: "20-2",
        question:
          "How does knowing God's throne is one of grace (not judgment) change how you approach Him?",
        placeholder: "Consider the difference...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      reference: "Philippians 4:7",
      defaultVersion: "KJV",
    },
    title: "A Guarded Heart",
    content: `God's peace is not the absence of trouble but a supernatural presence that stands guard in the midst of it. This peace "transcends understanding"—it doesn't always make logical sense given our circumstances.

When anxiety and worry threaten to overwhelm, we can present our requests to God. In return, He gives a peace that acts as a sentinel, protecting our inner being from fear and despair.

Allow God's peace to be the guardian of your heart today.`,
    prayer: `Lord, I receive Your peace that is beyond my understanding. Stand guard over my heart and mind, protecting me from anxiety and filling me with Your calm presence. Amen.`,
    readingPlan: "Philippians 4:4-9",
    reflection: [
      {
        id: "21-1",
        question:
          "What worry or anxiety are you needing to surrender to God today?",
        placeholder: "Name the fear...",
      },
      {
        id: "21-2",
        question:
          "When have you experienced God's peace in a situation that logically should have been stressful?",
        placeholder: "Describe that experience...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      reference: "Isaiah 30:21",
      defaultVersion: "KJV",
    },
    title: "The Guide's Voice",
    content: `God is not a silent observer but an active guide. He promises direction for every crossroad and confusion. His guidance is often not a detailed map for the entire journey, but a gentle whisper for the very next step.

We must cultivate a listening heart, attentive to the quiet promptings of His Spirit. As we commit our ways to Him, we can trust that He will make our paths straight and clear.

Listen for His voice today. He is speaking.`,
    prayer: `Holy Spirit, make me sensitive to Your guidance. Help me to quiet the noise around me and within me so I can clearly hear Your voice saying, 'This is the way.' Amen.`,
    readingPlan: "Isaiah 30:19-21",
    reflection: [
      {
        id: "22-1",
        question:
          "What decision or direction are you currently seeking God's guidance for?",
        placeholder: "Be specific...",
      },
      {
        id: "22-2",
        question: "How do you best discern God's leading in your life?",
        placeholder: "Through Scripture, prayer, counsel, peace...",
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
    title: "Light for the Next Step",
    content: `In a world of spiritual darkness and uncertainty, God's Word provides clarity and direction. It doesn't always illuminate the entire horizon, but it always gives enough light to take the next faithful step.

Scripture is practical and personal. It guides our moral choices, comforts our sorrows, corrects our errors, and shapes our character. Consistent time in God's Word ensures we never have to walk in darkness.

Let Scripture be the light that guides your choices today.`,
    prayer: `Father, thank You for the gift of Your Word. Help me to treasure it and rely on it. May it light my path and keep me from stumbling today. Amen.`,
    readingPlan: "Psalm 119:105-112",
    reflection: [
      {
        id: "23-1",
        question:
          "What specific situation in your life needs the 'light' of God's Word right now?",
        placeholder: "Name the area of confusion or decision...",
      },
      {
        id: "23-2",
        question:
          "How can you prioritize time in Scripture to receive its guiding light?",
        placeholder: "Think of a practical step...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      reference: "Nehemiah 8:10",
      defaultVersion: "KJV",
    },
    title: "The Source of Strength",
    content: `Biblical joy is deeper than happiness; it is a deep-seated confidence in God's goodness and sovereignty, regardless of circumstances. This joy is not manufactured by us but is a gift from the Lord.

This divine joy becomes our fortitude and resilience. It gives us the strength to endure, to persevere, and to hope when our own emotional and physical energy is depleted.

Don't seek strength alone today. Seek the joy of the Lord, and strength will follow.`,
    prayer: `God, fill me with Your joy—a joy that is rooted in who You are. Let that joy be the source of my strength and resilience today. Amen.`,
    readingPlan: "Nehemiah 8:1-12",
    reflection: [
      {
        id: "24-1",
        question: "What tends to drain your joy and strength?",
        placeholder: "Identify the sources...",
      },
      {
        id: "24-2",
        question: "How can focusing on God's character restore your joy?",
        placeholder: "Consider His faithfulness, love, power...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      reference: "Deuteronomy 31:8",
      defaultVersion: "KJV",
    },
    title: "The God Who Goes Before",
    content: `We serve a God who is not only with us in the present but is already in our future. He goes before us to prepare the way, to fight battles we haven't yet faced, and to make a way where there seems to be no way.

This truth is the ultimate antidote to fear and discouragement. We are not walking into the unknown alone. We are following a Leader who is all-powerful, all-knowing, and utterly faithful.

Wherever you are headed, remember: God is already there.`,
    prayer: `Father, thank you for going before me today. Help me to walk in courage and faith, trusting that You have already prepared the way and that You are with me every step. Amen.`,
    readingPlan: "Deuteronomy 31:1-8",
    reflection: [
      {
        id: "25-1",
        question: "What future situation are you apprehensive about?",
        placeholder: "Name the concern...",
      },
      {
        id: "25-2",
        question:
          "How does knowing God is already in your future change your perspective?",
        placeholder: "Consider the feeling of security...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      reference: "Isaiah 40:31",
      defaultVersion: "KJV",
    },
    title: "Renewed Strength",
    content: `Waiting can be one of the most difficult disciplines of the faith. We wait for answers, for healing, for direction, for change. But this verse redefines waiting. It is not a passive, hopeless inactivity; it is an active, hopeful trust in the Lord.

This kind of waiting—this hoping in the Lord—is the very source of our strength. It connects us to the limitless power of God, allowing us to rise above our circumstances, to persevere through long trials, and to continue steadily when our own energy has long since expired.`,
    prayer: `Lord, teach me to wait on You. When I am weary and faint, be my source of strength. Lift me up on eagle's wings and empower me to run this race with endurance. Amen.`,
    readingPlan: "Isaiah 40:27-31",
    reflection: [
      {
        id: "26-1",
        question:
          "In what area of your life are you feeling most weary right now?",
        placeholder: "Describe the exhaustion...",
      },
      {
        id: "26-2",
        question:
          "What would it look like to actively 'hope in the Lord' in that situation?",
        placeholder: "Imagine placing that burden down...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      reference: "Romans 8:28",
      defaultVersion: "KJV",
    },
    title: "All Things for Good",
    content: `This is not a promise that all things *are* good. Pain, loss, and evil are very real. Instead, it is the profound promise that God is a master weaver, taking every thread of our lives—the bright colors of joy and the dark hues of suffering—and weaving them together into a tapestry of purpose and good.

Our God is so powerful and sovereign that He can even redeem our pain and mistakes for our ultimate good and His glory. This promise is for those who are in a loving, trusting relationship with Him, aligning their lives with His eternal purpose.`,
    prayer: `God, I confess that I don't always see how good can come from my struggles. Help me to trust Your sovereign hand, believing that You are working even now to bring about good from this situation. Amen.`,
    readingPlan: "Romans 8:26-30",
    reflection: [
      {
        id: "27-1",
        question: "What is one difficult 'thread' in your life right now?",
        placeholder: "Name the struggle...",
      },
      {
        id: "27-2",
        question:
          "How can trusting God's promise to work for good change your attitude toward it?",
        placeholder: "Think about shifting from worry to trust...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      reference: "Proverbs 18:10",
      defaultVersion: "KJV",
    },
    title: "Your Strong Tower",
    content: `In ancient times, a strong tower was a place of refuge from attacking enemies. It represented safety, security, and a vantage point from which to see clearly. This verse tells us that the very name of the Lord—His character, His reputation, all that He is—is such a place for us.

When fear, anxiety, or trouble attacks, we don't have to stand and fight in our own strength. We are invited to *run*. To turn our backs on the chaos and sprint toward the safety of our God. In Him, we find true protection and perspective.`,
    prayer: `Lord, You are my safe place. When I feel overwhelmed, remind me to run to You first. Thank you for being my fortress and my deliverer. In Your name I find my peace. Amen.`,
    readingPlan: "Psalm 61:1-4",
    reflection: [
      {
        id: "28-1",
        question:
          "What enemy are you facing that you need to run from today (worry, fear, temptation, etc.)?",
        placeholder: "Identify the threat...",
      },
      {
        id: "28-2",
        question:
          "What does it look like, practically, for you to 'run into' the name of the Lord?",
        placeholder: "e.g., prayer, worship, reading Scripture...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      reference: "1 Peter 5:7",
      defaultVersion: "KJV",
    },
    title: "Cast Your Cares",
    content: `The word "cast" is an action word. It implies a deliberate, forceful throwing. We are not gently suggesting our worries to God; we are hurling them at Him. Why can we do this with such confidence? Because of the profound truth that follows: *He cares for you.*

Your worries are not trivial to God. Your anxieties are not a burden to Him. He is not annoyed by your needs. The Creator of the universe is personally, intimately, and deeply concerned with your well-being. You are invited to transfer the weight from your shoulders to His.`,
    prayer: `Father, I come to You today with all my worries and fears. I choose to cast them upon You, because I know You are strong enough to hold them and You love me enough to want to. Thank you for Your care. Amen.`,
    readingPlan: "1 Peter 5:6-11",
    reflection: [
      {
        id: "29-1",
        question:
          "What specific anxiety do you need to 'cast' onto God right now?",
        placeholder: "Name the care...",
      },
      {
        id: "29-2",
        question:
          "How does knowing God *cares for you* personally make it easier to give Him your anxiety?",
        placeholder: "Reflect on His personal love...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      reference: "Joshua 1:9",
      defaultVersion: "KJV",
    },
    title: "Wherever You Go",
    content: `This command was given to Joshua as he faced the daunting task of leading Israel into the Promised Land. It is a command rooted not in Joshua's own ability, but in God's faithful presence. The call to courage is directly tied to the promise of companionship.

This same promise is for us. We are not called to be strong and courageous because we are capable, but because He is present. His "wherever you go" covers every new job, every difficult conversation, every season of grief, and every unknown path. You are never alone.`,
    prayer: `Lord God, thank you for Your command and Your promise. Forgive me for when I operate in fear. Fill me with Your strength and courage today, based entirely on the truth that You are with me. Amen.`,
    readingPlan: "Joshua 1:1-9",
    reflection: [
      {
        id: "30-1",
        question: "Where is God asking you to be strong and courageous today?",
        placeholder: "Identify the challenge...",
      },
      {
        id: "30-2",
        question:
          "How can you actively lean into God's presence in that situation?",
        placeholder: "Think of one practical step...",
      },
    ],
  },
  {
    id: "31",
    date: getDevotionalDate("31"),
    verse: {
      reference: "2 Corinthians 5:17",
      defaultVersion: "KJV",
    },
    title: "New Creation in Christ",
    content: `As we end this month of devotionals, we're reminded of our identity in Christ. We are not merely improved versions of our old selves; we are completely new creations.

      This transformation isn't something we achieve but something we receive through faith in Christ. The old life with its patterns, guilt, and brokenness has been replaced with new life in Him.

      Today, embrace your identity as a new creation, not based on your feelings but on God's declaration.`,
    prayer: `Heavenly Father, thank you for making me a new creation in Christ. Help me to live out this new identity today, leaving behind old patterns and embracing the life You have for me. Amen.`,
    readingPlan: "2 Corinthians 5",
    reflection: [
      {
        id: "31-1",
        question: "What does being a 'new creation' mean to you personally?",
        placeholder: "Reflect on this truth...",
      },
      {
        id: "31-2",
        question:
          "Which 'old things' do you need to leave behind as you embrace your new identity?",
        placeholder: "Be specific...",
      },
      {
        id: "31-3",
        question:
          "How will you live differently today because of your new creation status?",
        placeholder: "Consider practical applications...",
      },
    ],
  },
];
