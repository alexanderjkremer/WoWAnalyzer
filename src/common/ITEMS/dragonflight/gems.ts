import { itemIndexableList } from 'common/ITEMS/Item';

const gems = itemIndexableList({
  // Rudimentary Gems
  SOLID_ETERNITY_EMBER_R1: {
    id: 192913,
    name: 'Solid Eternity Ember',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_bronze',
  },
  SOLID_ETERNITY_EMBER_R2: {
    id: 192914,
    name: 'Solid Eternity Ember',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_bronze',
  },
  SOLID_ETERNITY_EMBER_R3: {
    id: 192916,
    name: 'Solid Eternity Ember',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_bronze',
  },
  ZEN_MYSTIC_SAPPHIRE_R1: {
    id: 192903,
    name: 'Zen Mystic Sapphire',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_blue',
  },
  ZEN_MYSTIC_SAPPHIRE_R2: {
    id: 192904,
    name: 'Zen Mystic Sapphire',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_blue',
  },
  ZEN_MYSTIC_SAPPHIRE_R3: {
    id: 192905,
    name: 'Zen Mystic Sapphire',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_blue',
  },
  ENERGIZED_VIBRANT_EMERALD_R1: {
    id: 192906,
    name: 'Energized Vibrant Emerald',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_green',
  },
  ENERGIZED_VIBRANT_EMERALD_R2: {
    id: 192907,
    name: 'Energized Vibrant Emerald',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_green',
  },
  ENERGIZED_VIBRANT_EMERALD_R3: {
    id: 192908,
    name: 'Energized Vibrant Emerald',
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_green',
  },
  SENSEIS_SUNDERED_ONYX_R1: {
    id: 192910,
    name: "Sensei's Sundered Onyx",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_black',
  },
  SENSEIS_SUNDERED_ONYX_R2: {
    id: 192911,
    name: "Sensei's Sundered Onyx",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_black',
  },
  SENSEIS_SUNDERED_ONYX_R3: {
    id: 192912,
    name: "Sensei's Sundered Onyx",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_black',
  },
  CRAFTY_QUEENS_RUBY_R1: {
    id: 192900,
    name: "Crafty Queen's Ruby",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_red',
  },
  CRAFTY_QUEENS_RUBY_R2: {
    id: 192901,
    name: "Crafty Queen's Ruby",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_red',
  },
  CRAFTY_QUEENS_RUBY_R3: {
    id: 192902,
    name: "Crafty Queen's Ruby",
    icon: 'inv_10_jewelcrafting_gem1leveling_cut_red',
  },

  // Haste Gems
  FORCEFUL_NOZDORITE_R1: {
    id: 192971,
    name: 'Forceful Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  FORCEFUL_NOZDORITE_R2: {
    id: 192972,
    name: 'Forceful Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  FORCEFUL_NOZDORITE_R3: {
    id: 192973,
    name: 'Forceful Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  CRAFTY_ALEXSTRASZITE_R1: {
    id: 192917,
    name: 'Crafty Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  CRAFTY_ALEXSTRASZITE_R2: {
    id: 192918,
    name: 'Crafty Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  CRAFTY_ALEXSTRASZITE_R3: {
    id: 192919,
    name: 'Crafty Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  QUICK_YSEMERALD_R1: {
    id: 192953,
    name: 'Quick Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  QUICK_YSEMERALD_R2: {
    id: 192954,
    name: 'Quick Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  QUICK_YSEMERALD_R3: {
    id: 192955,
    name: 'Quick Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  KEEN_NELTHARITE_R1: {
    id: 192959,
    name: 'Keen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  KEEN_NELTHARITE_R2: {
    id: 192960,
    name: 'Keen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  KEEN_NELTHARITE_R3: {
    id: 192961,
    name: 'Keen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  ENERGIZED_MALYGITE_R1: {
    id: 192933,
    name: 'Energized Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  ENERGIZED_MALYGITE_R2: {
    id: 192934,
    name: 'Energized Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  ENERGIZED_MALYGITE_R3: {
    id: 192935,
    name: 'Energized Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },

  // Mastery Gems
  PUISSANT_NOZDORITE_R1: {
    id: 192974,
    name: 'Puissant Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  PUISSANT_NOZDORITE_R2: {
    id: 192975,
    name: 'Puissant Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  PUISSANT_NOZDORITE_R3: {
    id: 192976,
    name: 'Puissant Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  SENSEIS_ALEXSTRASZITE_R1: {
    id: 192920,
    name: "Sensei's Alexstraszite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  SENSEIS_ALEXSTRASZITE_R2: {
    id: 192921,
    name: "Sensei's Alexstraszite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  SENSEIS_ALEXSTRASZITE_R3: {
    id: 192922,
    name: "Sensei's Alexstraszite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  KEEN_YSEMERALD_R1: {
    id: 192946,
    name: 'Keen Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  KEEN_YSEMERALD_R2: {
    id: 192947,
    name: 'Keen Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  KEEN_YSEMERALD_R3: {
    id: 192948,
    name: 'Keen Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  FRACTURED_NELTHARITE_R1: {
    id: 192965,
    name: 'Fractured Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  FRACTURED_NELTHARITE_R2: {
    id: 192966,
    name: 'Fractured Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  FRACTURED_NELTHARITE_R3: {
    id: 192967,
    name: 'Fractured Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  ZEN_MALYGITE_R1: {
    id: 192936,
    name: 'Zen Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  ZEN_MALYGITE_R2: {
    id: 192937,
    name: 'Zen Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  ZEN_MALYGITE_R3: {
    id: 192938,
    name: 'Zen Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },

  // Critical Strike Gems
  JAGGED_NOZDORITE_R1: {
    id: 192968,
    name: 'Jagged Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  JAGGED_NOZDORITE_R2: {
    id: 192969,
    name: 'Jagged Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  JAGGED_NOZDORITE_R3: {
    id: 192970,
    name: 'Jagged Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  DEADLY_ALEXSTRASZITE_R1: {
    id: 192926,
    name: 'Deadly Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  DEADLY_ALEXSTRASZITE_R2: {
    id: 192927,
    name: 'Deadly Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  DEADLY_ALEXSTRASZITE_R3: {
    id: 192928,
    name: 'Deadly Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  CRAFTY_YSEMERALD_R1: {
    id: 192943,
    name: 'Crafty Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  CRAFTY_YSEMERALD_R2: {
    id: 192944,
    name: 'Crafty Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  CRAFTY_YSEMERALD_R3: {
    id: 192945,
    name: 'Crafty Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  SENSEIS_NELTHARITE_R1: {
    id: 192956,
    name: "Sensei's Neltharite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  SENSEIS_NELTHARITE_R2: {
    id: 192957,
    name: "Sensei's Neltharite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  SENSEIS_NELTHARITE_R3: {
    id: 192958,
    name: "Sensei's Neltharite",
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  RADIANT_MALYGITE_R1: {
    id: 192929,
    name: 'Radiant Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  RADIANT_MALYGITE_R2: {
    id: 192931,
    name: 'Radiant Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  RADIANT_MALYGITE_R3: {
    id: 192932,
    name: 'Radiant Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },

  // Versatility Gems
  STEADY_NOZDORITE_R1: {
    id: 192977,
    name: 'Steady Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  STEADY_NOZDORITE_R2: {
    id: 192978,
    name: 'Steady Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  STEADY_NOZDORITE_R3: {
    id: 192979,
    name: 'Steady Nozdorite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_bronze',
  },
  RADIANT_ALEXSTRASZITE_R1: {
    id: 192923,
    name: 'Radiant Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  RADIANT_ALEXSTRASZITE_R2: {
    id: 192924,
    name: 'Radiant Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  RADIANT_ALEXSTRASZITE_R3: {
    id: 192925,
    name: 'Radiant Alexstraszite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_red',
  },
  ENERGIZED_YSEMERALD_R1: {
    id: 192950,
    name: 'Energized Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  ENERGIZED_YSEMERALD_R2: {
    id: 192951,
    name: 'Energized Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  ENERGIZED_YSEMERALD_R3: {
    id: 192952,
    name: 'Energized Ysemerald',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_green',
  },
  ZEN_NELTHARITE_R1: {
    id: 192962,
    name: 'Zen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  ZEN_NELTHARITE_R2: {
    id: 192963,
    name: 'Zen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  ZEN_NELTHARITE_R3: {
    id: 192964,
    name: 'Zen Neltharite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_black',
  },
  STORMY_MALYGITE_R1: {
    id: 192940,
    name: 'Stormy Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  STORMY_MALYGITE_R2: {
    id: 192941,
    name: 'Stormy Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },
  STORMY_MALYGITE_R3: {
    id: 192942,
    name: 'Stormy Malygite',
    icon: 'inv_10_jewelcrafting_gem2standard_air_cut_blue',
  },

  // Primary Stat + Secondary Gems
  FIERCE_ILLIMITED_DIAMOND_R1: {
    id: 192983,
    name: 'Fierce Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_green',
  },
  FIERCE_ILLIMITED_DIAMOND_R2: {
    id: 192984,
    name: 'Fierce Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_green',
  },
  FIERCE_ILLIMITED_DIAMOND_R3: {
    id: 192985,
    name: 'Fierce Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_green',
  },
  SKILLFUL_ILLIMITED_DIAMOND_R1: {
    id: 192986,
    name: 'Skillful Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_black',
  },
  SKILLFUL_ILLIMITED_DIAMOND_R2: {
    id: 192987,
    name: 'Skillful Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_black',
  },
  SKILLFUL_ILLIMITED_DIAMOND_R3: {
    id: 192988,
    name: 'Skillful Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_black',
  },
  INSCRIBED_ILLIMITED_DIAMOND_R1: {
    id: 192980,
    name: 'Inscribed Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_red',
  },
  INSCRIBED_ILLIMITED_DIAMOND_R2: {
    id: 192981,
    name: 'Inscribed Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_red',
  },
  INSCRIBED_ILLIMITED_DIAMOND_R3: {
    id: 192982,
    name: 'Inscribed Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_red',
  },
  RESPLENDENT_ILLIMITED_DIAMOND_R1: {
    id: 192989,
    name: 'Resplendent Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_blue',
  },
  RESPLENDENT_ILLIMITED_DIAMOND_R2: {
    id: 192990,
    name: 'Resplendent Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_blue',
  },
  RESPLENDENT_ILLIMITED_DIAMOND_R3: {
    id: 192991,
    name: 'Resplendent Illimited Diamond',
    icon: 'inv_10_jewelcrafting_gem3primal_cut_blue',
  },
});

export default gems;
