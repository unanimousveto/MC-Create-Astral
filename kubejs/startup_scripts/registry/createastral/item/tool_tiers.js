(function createAstralToolTiersRegistry() {
  onEvent("item.registry.tool_tiers", (event) => {
    event.add("copper", (tier) => {
      tier.uses = 210;
      tier.speed = 5.0;
      tier.attackDamageBonus = 1.0;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });
    event.add("brass", (tier) => {
      tier.uses = 640;
      tier.speed = 9.0;
      tier.attackDamageBonus = 3.0;
      tier.level = 4;
      tier.enchantmentValue = 50;
    });
    event.add("radiant", (tier) => {
      tier.uses = 3000;
      tier.speed = 15.0;
      tier.attackDamageBonus = 10.0;
      tier.level = 4;
      tier.enchantmentValue = 99;
    });
	
	//Beta swords
    event.add("beta_iron", (tier) => {
      tier.uses = 250;
      tier.speed = 40.0;
      tier.attackDamageBonus = 2.0;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });
    event.add("beta_diamond", (tier) => {
      tier.uses = 1561;
      tier.speed = 40.0;
      tier.attackDamageBonus = 3.0;
      tier.level = 2;
      tier.enchantmentValue = 10;
    });
    event.add("beta_desh", (tier) => {
      tier.uses = 1089;
      tier.speed = 40.0;
      tier.attackDamageBonus = 3.5;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });
    event.add("beta_ostrum", (tier) => {
      tier.uses = 1561;
      tier.speed = 40.0;
      tier.attackDamageBonus = 4;
      tier.level = 2;
      tier.enchantmentValue = 10;
    });
    event.add("beta_calorite", (tier) => {
      tier.uses = 2048;
      tier.speed = 40.0;
      tier.attackDamageBonus = 5;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });
    event.add("beta_ender", (tier) => {
      tier.uses = 2560;
      tier.speed = 40.0;
      tier.attackDamageBonus = 6;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });
  });
})();
