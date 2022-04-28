import './styles/index.css';

const elvenShieldRecipe = {
    leatherStrips:2,
    ironIngot:1,
    refineMonstone:4,
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:4
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);