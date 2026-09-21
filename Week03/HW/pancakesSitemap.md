# My Recipe Site

## Sitemap

``` mermaid
graph LR
    Home --> REC["Recipes"]
    Home --> ING["Ingredients"]
    Home --> OCC["Occasions"]
    Home --> CUI["Cuisines"]
    Home --> ABT["About Us"]

    %% Subcategories
    ING --> FLO["Flour"]
    ING --> BUT["Buttermilk"]
    OCC --> BRE["Breakfast"]
    OCC --> BRU["Brunch"]
    CUI --> AME["American"]

    %% Recipes
    REC --> PAN["Pancakes"]
    FLO --> PAN
    BUT --> PAN
    BRE --> PAN
    BRU --> PAN
    AME --> PAN

    %% Footer
    Footer --> ABT["About Us"]

```