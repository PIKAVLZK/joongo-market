import supabase from "@/supabase/client";
import { deals } from "@/types/type";

async function getDeals() {
  const response = await supabase.from("deals").select("*");
  const deals = response.data as deals[];

  return deals;
}

const dealsAPI = {
  getDeals,
};

export default dealsAPI;
