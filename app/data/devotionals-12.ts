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
];
