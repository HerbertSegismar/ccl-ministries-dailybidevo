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
      reference: "John 2:11",
      defaultVersion: "KJV",
    },
    title: "The First Miracle",
    content: `Jesus revealed His glory by turning water into wine at the wedding in Cana. This first miracle demonstrated His power over creation and His willingness to bring joy to ordinary life. The miraculous transformation points to Jesus as the source of true abundance.

    The servants' obedience in filling the jars with water shows how God works through our simple acts of faith. When we bring our ordinary resources to Jesus, He can perform extraordinary miracles.`,
    prayer: `Lord Jesus, thank You for demonstrating Your power through miracles. Help me to trust You with my ordinary circumstances and believe You can do the extraordinary. Amen.`,
    readingPlan: "John 2:1-11",
    reflection: [
      {
        id: "1-1",
        question:
          "What 'ordinary' situation in your life needs Jesus' miraculous touch?",
        placeholder: "Describe a current need...",
      },
      {
        id: "1-2",
        question: "How does this miracle reveal Jesus' character?",
        placeholder: "Reflect on His power and compassion...",
      },
    ],
  },
  {
    id: "2",
    date: getDevotionalDate("2"),
    verse: {
      reference: "Matthew 14:25-27",
      defaultVersion: "KJV",
    },
    title: "Walking on Water",
    content: `In the midst of a storm, Jesus walked on water to reach His disciples. This miracle demonstrates His authority over natural laws and His commitment to be with us in our storms. When Peter stepped out in faith, he experienced the impossible.

    Even when our faith wavers, Jesus reaches out to save us. His presence in our storms brings peace where there should be panic.`,
    prayer: `Lord Jesus, thank You for coming to me in life's storms. Help me to keep my eyes on You and trust Your power over every impossible situation. Amen.`,
    readingPlan: "Matthew 14:22-33",
    reflection: [
      {
        id: "2-1",
        question:
          "What 'storm' are you facing where you need Jesus to come walking on water?",
        placeholder: "Describe your current challenge...",
      },
      {
        id: "2-2",
        question:
          "When have you experienced Jesus' rescue when your faith wavered?",
        placeholder: "Recall a past experience...",
      },
    ],
  },
  {
    id: "3",
    date: getDevotionalDate("3"),
    verse: {
      reference: "John 11:43-44",
      defaultVersion: "KJV",
    },
    title: "Lazarus Raised from Death",
    content: `Jesus called Lazarus out of the tomb after four days, demonstrating His power over death itself. This miracle confirms that Jesus is the resurrection and the life. No situation is too hopeless for His power.

    Just as Jesus called Lazarus by name, He knows your specific situation and speaks life into your dead places. His timing may not be ours, but His power is never limited.`,
    prayer: `Lord Jesus, thank You that You have power over death. Speak life into the dead areas of my life and help me to trust Your timing. Amen.`,
    readingPlan: "John 11:1-44",
    reflection: [
      {
        id: "3-1",
        question:
          "What 'dead' situation in your life needs Jesus' life-giving word?",
        placeholder: "Identify areas of hopelessness...",
      },
      {
        id: "3-2",
        question:
          "How does this miracle strengthen your hope for eternal life?",
        placeholder: "Reflect on resurrection power...",
      },
    ],
  },
  {
    id: "4",
    date: getDevotionalDate("4"),
    verse: {
      reference: "Mark 4:39",
      defaultVersion: "KJV",
    },
    title: "Calming the Storm",
    content: `With just three words, "Peace, be still," Jesus calmed a violent storm that terrified experienced fishermen. This miracle shows His absolute authority over nature and His care for His followers' fears.

    The same voice that created the universe speaks peace into our chaos. When life feels out of control, Jesus remains in complete control.`,
    prayer: `Prince of Peace, speak Your calming word over the storms in my life. Help me to trust Your authority when I feel afraid. Amen.`,
    readingPlan: "Mark 4:35-41",
    reflection: [
      {
        id: "4-1",
        question: "What chaotic situation needs Jesus' command of peace?",
        placeholder: "Describe your storm...",
      },
      {
        id: "4-2",
        question: "How has Jesus calmed your fears in past situations?",
        placeholder: "Recall His faithfulness...",
      },
    ],
  },
  {
    id: "5",
    date: getDevotionalDate("5"),
    verse: {
      reference: "John 9:7",
      defaultVersion: "KJV",
    },
    title: "Healing the Man Born Blind",
    content: `Jesus healed a man blind from birth, showing that He is the light of the world. This miracle involved both the man's obedience in washing and Jesus' power to heal. The physical healing pointed to spiritual sight.

    Sometimes Jesus works through our participation in miracles. Our simple obedience can become the channel for His extraordinary power.`,
    prayer: `Lord Jesus, light of the world, open my eyes to see You clearly. Use my simple acts of obedience to display Your miraculous power. Amen.`,
    readingPlan: "John 9:1-41",
    reflection: [
      {
        id: "5-1",
        question: "What area of your life needs Jesus to give spiritual sight?",
        placeholder: "Identify areas of blindness...",
      },
      {
        id: "5-2",
        question: "How has Jesus opened your eyes to spiritual truth?",
        placeholder: "Recall moments of revelation...",
      },
    ],
  },
  {
    id: "6",
    date: getDevotionalDate("6"),
    verse: {
      reference: "Luke 5:4-6",
      defaultVersion: "KJV",
    },
    title: "Miraculous Catch of Fish",
    content: `After a night of catching nothing, Peter obeyed Jesus' command to let down the nets and experienced a catch so great it nearly sank two boats. This miracle demonstrated Jesus' power over nature and His provision for our needs.

    Jesus often asks us to try again when we feel we've failed. Our obedience in the face of disappointment can lead to overwhelming blessing.`,
    prayer: `Lord Jesus, thank You for Your miraculous provision. Help me to obey even when I don't understand and trust Your timing for blessing. Amen.`,
    readingPlan: "Luke 5:1-11",
    reflection: [
      {
        id: "6-1",
        question:
          "Where have you experienced disappointment that needs Jesus' miraculous touch?",
        placeholder: "Describe areas of failure...",
      },
      {
        id: "6-2",
        question: "How does this miracle encourage you to keep trying?",
        placeholder: "Reflect on perseverance...",
      },
    ],
  },
  {
    id: "7",
    date: getDevotionalDate("7"),
    verse: {
      reference: "Matthew 8:3",
      defaultVersion: "KJV",
    },
    title: "Healing the Leper",
    content: `Jesus touched and healed a man with leprosy, demonstrating His power over disease and His compassion for the outcast. In a society where lepers were untouchable, Jesus' physical touch showed unprecedented love.

    No one is too unclean for Jesus' touch. His power can heal our deepest wounds and restore us to community.`,
    prayer: `Lord Jesus, thank You for Your healing touch. Help me to believe that no situation is beyond Your power to heal and restore. Amen.`,
    readingPlan: "Matthew 8:1-4",
    reflection: [
      {
        id: "7-1",
        question:
          "What area of your life feels 'untouchable' that needs Jesus' healing?",
        placeholder: "Identify areas of shame...",
      },
      {
        id: "7-2",
        question: "How has Jesus demonstrated compassion in your life?",
        placeholder: "Recall His loving touch...",
      },
    ],
  },
  {
    id: "8",
    date: getDevotionalDate("8"),
    verse: {
      reference: "Mark 5:41-42",
      defaultVersion: "KJV",
    },
    title: "Raising Jairus' Daughter",
    content: `Jesus took a dead girl by the hand and said, "Talitha cumi" - "Little girl, arise." Immediately she stood up and walked. This miracle shows Jesus' power over death and His tender care for children.

    Jesus speaks life into hopeless situations. His words have creative power to bring dead things back to life.`,
    prayer: `Lord Jesus, thank You for Your life-giving power. Speak Your resurrecting word over the dead areas of my life and family. Amen.`,
    readingPlan: "Mark 5:21-43",
    reflection: [
      {
        id: "8-1",
        question:
          "What seemingly hopeless situation needs Jesus' life-giving word?",
        placeholder: "Describe areas of despair...",
      },
      {
        id: "8-2",
        question:
          "How does this miracle strengthen your faith in Jesus' power?",
        placeholder: "Reflect on His authority...",
      },
    ],
  },
  {
    id: "9",
    date: getDevotionalDate("9"),
    verse: {
      reference: "Matthew 14:19-20",
      defaultVersion: "KJV",
    },
    title: "Feeding the Five Thousand",
    content: `With five loaves and two fish, Jesus fed over five thousand people with twelve baskets left over. This miracle demonstrates God's abundant provision and His ability to multiply our small offerings.

    When we bring our limited resources to Jesus, He can multiply them to meet overwhelming needs. God's economy operates on multiplication, not addition.`,
    prayer: `Lord Jesus, thank You for Your abundant provision. Take my small resources and multiply them for Your glory and others' needs. Amen.`,
    readingPlan: "Matthew 14:13-21",
    reflection: [
      {
        id: "9-1",
        question: "What limited resource do you need Jesus to multiply?",
        placeholder: "Identify your 'loaves and fish'...",
      },
      {
        id: "9-2",
        question: "How has God provided abundantly in your past?",
        placeholder: "Recall times of multiplication...",
      },
    ],
  },
  {
    id: "10",
    date: getDevotionalDate("10"),
    verse: {
      reference: "John 5:8-9",
      defaultVersion: "KJV",
    },
    title: "Healing at the Pool of Bethesda",
    content: `Jesus healed a man who had been invalid for thirty-eight years, telling him to rise, take up his bed, and walk. This miracle shows Jesus' power to heal long-standing conditions and His authority to command action.

    Sometimes Jesus tells us to do what seems impossible. Our obedience activates His healing power in our lives.`,
    prayer: `Lord Jesus, thank You for healing long-standing conditions. Give me faith to obey when You command me to do the impossible. Amen.`,
    readingPlan: "John 5:1-15",
    reflection: [
      {
        id: "10-1",
        question: "What long-standing problem needs Jesus' healing touch?",
        placeholder: "Describe persistent issues...",
      },
      {
        id: "10-2",
        question: "What is Jesus commanding you to do that requires faith?",
        placeholder: "Identify steps of obedience...",
      },
    ],
  },
  {
    id: "11",
    date: getDevotionalDate("11"),
    verse: {
      reference: "Exodus 14:21-22",
      defaultVersion: "KJV",
    },
    title: "Parting the Red Sea",
    content: `God miraculously parted the Red Sea, allowing the Israelites to escape Pharaoh's army. This great miracle demonstrated God's power over nature and His deliverance of His people.

    When there seems to be no way forward, God can make a way through impossible circumstances. His power is displayed when we're trapped between the enemy and the sea.`,
    prayer: `Almighty God, thank You for making a way when there seems to be no way. Help me to trust Your deliverance in impossible situations. Amen.`,
    readingPlan: "Exodus 14:1-31",
    reflection: [
      {
        id: "11-1",
        question:
          "What 'Red Sea' are you facing that needs God's miraculous intervention?",
        placeholder: "Describe impossible circumstances...",
      },
      {
        id: "11-2",
        question: "How has God made a way for you in the past?",
        placeholder: "Recall His deliverance...",
      },
    ],
  },
  {
    id: "12",
    date: getDevotionalDate("12"),
    verse: {
      reference: "Daniel 3:25",
      defaultVersion: "KJV",
    },
    title: "The Fourth Man in the Fire",
    content: `God miraculously protected Shadrach, Meshach, and Abednego in the fiery furnace, sending a fourth figure who looked like "the Son of God." This miracle shows God's presence with us in our trials and His power to protect us from harm.

    The God we serve is able to deliver us, but even if He doesn't, He will be with us in the fire.`,
    prayer: `Lord God, thank You for being with me in life's fires. Help me to trust Your presence and protection no matter what I face. Amen.`,
    readingPlan: "Daniel 3:1-30",
    reflection: [
      {
        id: "12-1",
        question:
          "What 'fiery trial' are you facing where you need God's presence?",
        placeholder: "Describe current challenges...",
      },
      {
        id: "12-2",
        question: "How has God been with you in past difficulties?",
        placeholder: "Recall His faithful presence...",
      },
    ],
  },
  {
    id: "13",
    date: getDevotionalDate("13"),
    verse: {
      reference: "Joshua 10:12-13",
      defaultVersion: "KJV",
    },
    title: "The Sun Stands Still",
    content: `At Joshua's request, God made the sun stand still for about a full day, allowing Israel to complete their victory. This miracle demonstrates God's power over the universe and His responsiveness to bold faith.

    When we pray according to God's purposes, He can intervene in nature itself to accomplish His will.`,
    prayer: `Lord God, thank You for hearing bold prayers. Help me to pray with faith that believes You can do the impossible. Amen.`,
    readingPlan: "Joshua 10:1-14",
    reflection: [
      {
        id: "13-1",
        question:
          "What situation needs God's miraculous intervention like the sun standing still?",
        placeholder: "Describe needs requiring divine timing...",
      },
      {
        id: "13-2",
        question: "When have you experienced God answering a bold prayer?",
        placeholder: "Recall specific answers...",
      },
    ],
  },
  {
    id: "14",
    date: getDevotionalDate("14"),
    verse: {
      reference: "1 Kings 18:38",
      defaultVersion: "KJV",
    },
    title: "Fire from Heaven",
    content: `God sent fire from heaven to consume Elijah's water-drenched sacrifice, demonstrating His power and proving He is the true God. This miracle led to a national revival and the end of a drought.

    When we stand for truth in difficult times, God can display His power in ways that turn hearts back to Him.`,
    prayer: `Lord God, thank You for demonstrating Your power. Help me to stand for truth and trust You to reveal Yourself mightily. Amen.`,
    readingPlan: "1 Kings 18:20-39",
    reflection: [
      {
        id: "14-1",
        question:
          "Where do you need God to demonstrate His power in your life?",
        placeholder: "Describe areas needing divine confirmation...",
      },
      {
        id: "14-2",
        question: "How has God shown Himself strong in your past?",
        placeholder: "Recall His powerful works...",
      },
    ],
  },
  {
    id: "15",
    date: getDevotionalDate("15"),
    verse: {
      reference: "Matthew 15:30-31",
      defaultVersion: "KJV",
    },
    title: "Jesus Heals Multitudes",
    content: `Great crowds came to Jesus, bringing the lame, blind, crippled, mute, and many others. He healed them all, and the people were amazed. This demonstrates Jesus' comprehensive healing power and compassion for all types of suffering.

    No condition is beyond Jesus' healing touch. His power extends to every area of human need.`,
    prayer: `Lord Jesus, thank You for Your comprehensive healing power. I bring all my needs to You, trusting in Your compassion and ability. Amen.`,
    readingPlan: "Matthew 15:29-31",
    reflection: [
      {
        id: "15-1",
        question: "What specific need will you bring to Jesus today?",
        placeholder: "Identify physical, emotional, or spiritual needs...",
      },
      {
        id: "15-2",
        question: "How does Jesus' compassion for multitudes comfort you?",
        placeholder: "Reflect on His care for individuals...",
      },
    ],
  },
  {
    id: "16",
    date: getDevotionalDate("16"),
    verse: {
      reference: "Acts 3:6-8",
      defaultVersion: "KJV",
    },
    title: "Healing at the Beautiful Gate",
    content: `Peter and John healed a lame man in Jesus' name, saying, "Silver and gold have I none, but such as I have give I thee." The man began walking and leaping and praising God.

    The power of Jesus' name continues to work miracles through His followers today. Our authority comes from Him, not our resources.`,
    prayer: `Lord Jesus, thank You for working miracles through Your name. Help me to minister in Your power and for Your glory. Amen.`,
    readingPlan: "Acts 3:1-10",
    reflection: [
      {
        id: "16-1",
        question: "How can you minister Jesus' healing power to others?",
        placeholder: "Consider opportunities to serve...",
      },
      {
        id: "16-2",
        question: "What has God done through you when you relied on His power?",
        placeholder: "Recall experiences of divine enablement...",
      },
    ],
  },
  {
    id: "17",
    date: getDevotionalDate("17"),
    verse: {
      reference: "Luke 17:14-15",
      defaultVersion: "KJV",
    },
    title: "Healing Ten Lepers",
    content: `Jesus healed ten lepers as they went to show themselves to the priests. Only one returned to thank Him. This miracle shows Jesus' power to heal and His desire for grateful hearts.

    God's miracles should always lead us to worship. Gratitude recognizes the source of our blessing.`,
    prayer: `Lord Jesus, thank You for Your healing power. Help me to always return with gratitude for what You have done. Amen.`,
    readingPlan: "Luke 17:11-19",
    reflection: [
      {
        id: "17-1",
        question: "For what recent blessings do you need to thank Jesus?",
        placeholder: "List specific answers to prayer...",
      },
      {
        id: "17-2",
        question: "How can you cultivate a more grateful heart?",
        placeholder: "Consider daily practices...",
      },
    ],
  },
  {
    id: "18",
    date: getDevotionalDate("18"),
    verse: {
      reference: "Mark 7:34-35",
      defaultVersion: "KJV",
    },
    title: "Healing a Deaf and Mute Man",
    content: `Jesus put His fingers in the man's ears, spat and touched his tongue, looked to heaven, and said, "Ephphatha" - "Be opened." Immediately the man could hear and speak.

    Jesus' personalized approach to miracles shows His care for individual needs. He meets us exactly where we are.`,
    prayer: `Lord Jesus, thank You for Your personal touch. Open my ears to hear You and my mouth to speak Your praise. Amen.`,
    readingPlan: "Mark 7:31-37",
    reflection: [
      {
        id: "18-1",
        question: "What area of your life needs Jesus to say 'Be opened'?",
        placeholder: "Identify closed areas...",
      },
      {
        id: "18-2",
        question: "How has Jesus met you in personal ways?",
        placeholder: "Recall specific encounters...",
      },
    ],
  },
  {
    id: "19",
    date: getDevotionalDate("19"),
    verse: {
      reference: "John 6:19-20",
      defaultVersion: "KJV",
    },
    title: "Jesus Walks on Water",
    content: `In the fourth watch of the night, Jesus came walking on the sea toward His disciples. When they saw Him, they were terrified, but He said, "It is I; be not afraid."

    Jesus comes to us in our darkest hours, walking on the very waves that frighten us. His presence turns fear into faith.`,
    prayer: `Lord Jesus, thank You for coming to me in life's storms. Help me to recognize Your presence and not be afraid. Amen.`,
    readingPlan: "John 6:16-21",
    reflection: [
      {
        id: "19-1",
        question: "What fear do you need Jesus to calm with His presence?",
        placeholder: "Describe your fears...",
      },
      {
        id: "19-2",
        question: "How has Jesus comforted you in past fears?",
        placeholder: "Recall His faithful presence...",
      },
    ],
  },
  {
    id: "20",
    date: getDevotionalDate("20"),
    verse: {
      reference: "Matthew 9:6-7",
      defaultVersion: "KJV",
    },
    title: "Healing a Paralytic",
    content: `Jesus healed a paralyzed man, first forgiving his sins and then commanding him to rise and walk. This miracle demonstrated Jesus' authority both to forgive sins and to heal physically.

    Our greatest need is spiritual healing, but Jesus cares about our physical needs too. His power addresses every dimension of human need.`,
    prayer: `Lord Jesus, thank You for Your authority to forgive and heal. Touch every area of my life with Your restoring power. Amen.`,
    readingPlan: "Matthew 9:1-8",
    reflection: [
      {
        id: "20-1",
        question: "What area of your life needs Jesus' healing touch today?",
        placeholder: "Identify spiritual or physical needs...",
      },
      {
        id: "20-2",
        question:
          "How does Jesus' authority over sin and sickness comfort you?",
        placeholder: "Reflect on His comprehensive power...",
      },
    ],
  },
  {
    id: "21",
    date: getDevotionalDate("21"),
    verse: {
      reference: "Exodus 16:14-15",
      defaultVersion: "KJV",
    },
    title: "Manna from Heaven",
    content: `God provided manna from heaven to feed the Israelites in the wilderness. Each morning this bread appeared, showing God's daily provision and faithfulness.

    God still provides for our daily needs. His faithfulness is new every morning, and His resources never run out.`,
    prayer: `Heavenly Father, thank You for Your daily provision. Help me to trust You for today's needs and not worry about tomorrow. Amen.`,
    readingPlan: "Exodus 16:1-36",
    reflection: [
      {
        id: "21-1",
        question: "What need do you have for God's daily provision?",
        placeholder: "Describe current concerns...",
      },
      {
        id: "21-2",
        question: "How has God provided for you in the past?",
        placeholder: "Recall specific provisions...",
      },
    ],
  },
  {
    id: "22",
    date: getDevotionalDate("22"),
    verse: {
      reference: "1 Kings 17:14-16",
      defaultVersion: "KJV",
    },
    title: "The Widow's Oil Multiplied",
    content: `God multiplied a widow's oil and flour during a famine, providing continuously until the drought ended. This miracle shows God's power to multiply our resources in times of scarcity.

    When we give God our last resources in obedience, He can multiply them to meet our needs and bless others.`,
    prayer: `Lord God, thank You for Your multiplication power. Help me to trust You with my limited resources and obey Your directions. Amen.`,
    readingPlan: "1 Kings 17:7-16",
    reflection: [
      {
        id: "22-1",
        question: "What limited resource do you need God to multiply?",
        placeholder: "Identify areas of scarcity...",
      },
      {
        id: "22-2",
        question:
          "How has God provided when you obeyed despite limited resources?",
        placeholder: "Recall experiences of provision...",
      },
    ],
  },
  {
    id: "23",
    date: getDevotionalDate("23"),
    verse: {
      reference: "Acts 9:40-41",
      defaultVersion: "KJV",
    },
    title: "Peter Raises Dorcas",
    content: `Peter prayed and raised Dorcas from the dead, restoring her to the community that loved her. This miracle demonstrates that the power Jesus demonstrated continues through His church.

    God still works resurrection power today. He cares about individuals and the impact of their lives on others.`,
    prayer: `Lord Jesus, thank You for continuing to work miracles through Your people. Use me to bring life and hope to others. Amen.`,
    readingPlan: "Acts 9:36-42",
    reflection: [
      {
        id: "23-1",
        question: "Who in your life needs God's restoring power?",
        placeholder: "Pray for specific people...",
      },
      {
        id: "23-2",
        question: "How can you be a vessel of God's life-giving power?",
        placeholder: "Consider ways to serve...",
      },
    ],
  },
  {
    id: "24",
    date: getDevotionalDate("24"),
    verse: {
      reference: "Numbers 20:11",
      defaultVersion: "KJV",
    },
    title: "Water from the Rock",
    content: `Moses struck the rock and water gushed out to quench the thirst of the Israelites. This miracle shows God's provision in barren places and His faithfulness to meet basic needs.

    Even in our spiritual deserts, God can bring refreshing streams of living water. His provision flows from unexpected sources.`,
    prayer: `Lord God, thank You for providing living water. Quench my thirst and refresh me in dry places. Amen.`,
    readingPlan: "Numbers 20:1-13",
    reflection: [
      {
        id: "24-1",
        question: "What 'dry' area of your life needs God's refreshing?",
        placeholder: "Describe spiritual dryness...",
      },
      {
        id: "24-2",
        question: "How has God provided unexpectedly in the past?",
        placeholder: "Recall surprising provisions...",
      },
    ],
  },
  {
    id: "25",
    date: getDevotionalDate("25"),
    verse: {
      reference: "2 Kings 4:34-35",
      defaultVersion: "KJV",
    },
    title: "Elisha Raises the Shunammite's Son",
    content: `Elisha stretched himself over a dead child, and the boy came back to life. This miracle shows God's power over death and His compassion for grieving parents.

    God's heart breaks with ours in loss, and His power can restore what seems irrevocably gone.`,
    prayer: `Lord God, thank You for Your power over death. Comfort those who grieve and restore hope where there is loss. Amen.`,
    readingPlan: "2 Kings 4:8-37",
    reflection: [
      {
        id: "25-1",
        question: "What loss are you grieving that needs God's comfort?",
        placeholder: "Describe your grief...",
      },
      {
        id: "25-2",
        question: "How has God comforted you in past losses?",
        placeholder: "Recall His faithfulness...",
      },
    ],
  },
  {
    id: "26",
    date: getDevotionalDate("26"),
    verse: {
      reference: "Matthew 8:26-27",
      defaultVersion: "KJV",
    },
    title: "Jesus Calms Another Storm",
    content: `Jesus rebuked the winds and the sea, and there was a great calm. The disciples marveled, saying, "What manner of man is this, that even the winds and the sea obey him!"

    Jesus' authority over creation reveals His divine nature. The same power that controls nature can bring peace to our troubled hearts.`,
    prayer: `Lord Jesus, thank You for Your authority over all creation. Speak peace to the storms in my heart and circumstances. Amen.`,
    readingPlan: "Matthew 8:23-27",
    reflection: [
      {
        id: "26-1",
        question: "What inner storm needs Jesus' calming word?",
        placeholder: "Describe emotional turmoil...",
      },
      {
        id: "26-2",
        question: "How has Jesus brought calm to your life before?",
        placeholder: "Recall past peace...",
      },
    ],
  },
  {
    id: "27",
    date: getDevotionalDate("27"),
    verse: {
      reference: "John 4:50-53",
      defaultVersion: "KJV",
    },
    title: "Healing the Official's Son",
    content: `Jesus healed a royal official's son from a distance, simply by speaking the word. The man believed Jesus' word and found his son healed at exactly that time.

    Jesus' power is not limited by distance. His word alone can accomplish miracles in situations we cannot physically reach.`,
    prayer: `Lord Jesus, thank You that Your power works beyond our limitations. I trust Your word to accomplish what I cannot. Amen.`,
    readingPlan: "John 4:46-54",
    reflection: [
      {
        id: "27-1",
        question:
          "What situation beyond your control needs Jesus' powerful word?",
        placeholder: "Describe distant concerns...",
      },
      {
        id: "27-2",
        question: "How has God worked in situations you couldn't control?",
        placeholder: "Recall His sovereign work...",
      },
    ],
  },
  {
    id: "28",
    date: getDevotionalDate("28"),
    verse: {
      reference: "Luke 13:12-13",
      defaultVersion: "KJV",
    },
    title: "Healing a Woman Bent Double",
    content: `Jesus saw a woman who had been crippled for eighteen years, called her forward, and said, "Woman, you are loosed from your infirmity." He laid hands on her, and immediately she stood straight.

    Jesus sees those whom society overlooks. His touch can straighten what life has bent out of shape.`,
    prayer: `Lord Jesus, thank You for seeing and healing those whom others overlook. Touch the bent areas of my life and make me straight. Amen.`,
    readingPlan: "Luke 13:10-17",
    reflection: [
      {
        id: "28-1",
        question:
          "What area of your life has been 'bent double' that needs Jesus' healing?",
        placeholder: "Describe long-term struggles...",
      },
      {
        id: "28-2",
        question: "How has Jesus restored you when you felt overlooked?",
        placeholder: "Recall His personal care...",
      },
    ],
  },
  {
    id: "29",
    date: getDevotionalDate("29"),
    verse: {
      reference: "Mark 8:24-25",
      defaultVersion: "KJV",
    },
    title: "Healing a Blind Man in Stages",
    content: `Jesus healed a blind man in two stages - first partial sight, then complete healing. This unique miracle shows that Jesus adapts His methods to individual needs and sometimes works progressively.

    God's healing power sometimes works gradually rather than instantly. We can trust His process and timing.`,
    prayer: `Lord Jesus, thank You for Your patient work in my life. Help me to trust Your process even when healing comes gradually. Amen.`,
    readingPlan: "Mark 8:22-26",
    reflection: [
      {
        id: "29-1",
        question: "What area of your life needs Jesus' progressive healing?",
        placeholder: "Describe ongoing needs...",
      },
      {
        id: "29-2",
        question: "How has God worked gradually in your spiritual growth?",
        placeholder: "Recall progressive transformation...",
      },
    ],
  },
  {
    id: "30",
    date: getDevotionalDate("30"),
    verse: {
      reference: "John 11:40",
      defaultVersion: "KJV",
    },
    title: "Jesus Said, 'Did I Not Say?'",
    content: `Before raising Lazarus, Jesus reminded Martha, "Did I not say to you that if you would believe you would see the glory of God?" This miracle required faith before the manifestation.

    Sometimes God asks us to believe before we see. Our faith positions us to witness His glory.`,
    prayer: `Lord Jesus, help me to believe before I see. Strengthen my faith to trust Your promises and anticipate Your glory. Amen.`,
    readingPlan: "John 11:38-44",
    reflection: [
      {
        id: "30-1",
        question:
          "What promise of God requires faith before you see fulfillment?",
        placeholder: "Identify areas needing belief...",
      },
      {
        id: "30-2",
        question: "How has God honored your faith in the past?",
        placeholder: "Recall faith experiences...",
      },
    ],
  },
  {
    id: "31",
    date: getDevotionalDate("31"),
    verse: {
      reference: "Matthew 28:5-6",
      defaultVersion: "KJV",
    },
    title: "The Greatest Miracle",
    content: `The angel announced, "He is not here, for He is risen!" The resurrection of Jesus is the greatest miracle, validating His divinity and guaranteeing our salvation.

    Because Jesus conquered death, we have hope for eternal life. Every other miracle points to this ultimate victory.`,
    prayer: `Lord Jesus, thank You for conquering death and giving me eternal life. Help me to live in the power of Your resurrection every day. Amen.`,
    readingPlan: "Matthew 28:1-10",
    reflection: [
      {
        id: "31-1",
        question: "How does Jesus' resurrection give you hope today?",
        placeholder: "Reflect on eternal life...",
      },
      {
        id: "31-2",
        question:
          "What difference does the resurrection make in your daily life?",
        placeholder: "Consider practical implications...",
      },
    ],
  },
];
