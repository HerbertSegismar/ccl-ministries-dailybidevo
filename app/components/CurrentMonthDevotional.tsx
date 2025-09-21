import { useState, useEffect } from "react";
import { Devotional } from "../types";

// This hook will fetch the devotionals for the current month
const useCurrentMonthDevotional = () => {
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [loading, setLoading] = useState(true);
  const month = new Date().getMonth() + 1;

  useEffect(() => {
    const loadDevotionals = async () => {
      try {
        const devotionalModule = await import(`@/app/data/devotionals-${month}.ts`);
        setDevotionals(devotionalModule.devotionals || []);
      } catch (error) {
        console.error(`Failed to load devotionals for month ${month}`, error);
      } finally {
        setLoading(false);
      }
    };

    loadDevotionals();
  }, [month]);

  return { devotionals, loading };
};

export default useCurrentMonthDevotional;
