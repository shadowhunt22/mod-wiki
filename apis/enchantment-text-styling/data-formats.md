---
outline: deep
---

# Enchantment Text Styling Data Formats

## Enchantment

Enchantment files defines the styles that will be applied to an enchantment's text.  By default, this mod does not come with any datapacks, rather, it is up to the datapack or modpack creator, or the mod developer, to create these entires.  These files are loaded from `data/enchantment-text-color/styling/enchantment/[enchantment_name].json`.

<table>
    <tr>
        <th>Field</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <th>
          <code>enchantment</code>
        </th>
        <th>A string for the identifier of an enchantment to apply styling to its text.</th>
        <th>Yes</th>
    </tr>
    <tr>
        <th>
          <code>styles</code>
        </th>
        <th>
          An array of objects containing the styling information of an enchantment's text and the conditions of when it will be applied.
        </th>
        <th>Yes</th>
    </tr>
</table>

## Styles

<table>
    <tr>
        <th>Field</th>
        <th>Description</th>
        <th>Default</th>
    </tr>
    <tr>
        <th>
          <code>color</code>
        </th>
        <th>An integer representing an RBG color.  Use a tool like <a href="http://www.shodor.org/~efarrow/trunk/html/rgbint.html" target="_about">shodor.org</a> to convert an RGB value to an integer.</th>
        <th>
          <code>required</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>bold</code>
        </th>
        <th>Bold style</th>
        <th>
          <code>false</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>italic</code>
        </th>
        <th>Italic style</th>
        <th>
          <code>false</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>underlined</code>
        </th>
        <th>Underlined style</th>
        <th>
          <code>false</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>strikethrough</code>
        </th>
        <th>Strikethrough style</th>
        <th>
          <code>false</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>obfuscated</code>
        </th>
        <th>Obfuscated style</th>
        <th>
          <code>false</code>
        </th>
    </tr>
        <tr>
        <th>
          <code>condition</code>
        </th>
        <th>An optional object containing conditions of when the above stylings will be applied.</th>
        <th>
          <code>none</code>
        </th>
    </tr>
</table>

## Condition

<table>
    <tr>
        <th>Field</th>
        <th>Description</th>
        <th>Default</th>
    </tr>
    <tr>
        <th>
          <code>value</code>
        </th>
        <th>Apply styling to a specific enchantment level</th>
        <th>
          <code>none</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>min</code>
        </th>
        <th>Apply styling to a minimum enchantment level</th>
        <th>
          <code>none</code>
        </th>
    </tr>
    <tr>
        <th>
          <code>max</code>
        </th>
        <th>Apply styling to a maximum enchantment level</th>
        <th>
          <code>none</code>
        </th>
    </tr>
</table>

## Examples

### Styling

Here is how to write a styling for an enchantment with Minecraft's different text styles:

```json
[
  {
    "enchantment": "namespace:id",
    "styles": {
      "color": 16733525,
      "bold": true,
      "italic": true,
      "underlined": true,
      "strikethrough": true,
      "obfuscated": true
    }
  }
]
```

### Specific Level

To change the color of `Protection I` to red, create a `protection.json` file and place it in `data/enchantment-text-styling/styling/enchantment` with the following data:

```json
{
  "enchantment": "minecraft:protection",
  "styles": [
    {
      "color": 16733525,
      "conditions": { "value": 1 }
    }
  ]
}
```

To add more conditions, add more objects to the `styles` array like so:

```json
{
  "enchantment": "minecraft:protection",
  "styles": [
    {
      "color": 16733525,
      "conditions": { "value": 1 }
    },
    {
      "color": 16755200,
      "conditions": { "value": 2 }
    }
  ]
}
```

This allows you to have one color for `Protection I` and a different color for `Protection II`!

### Minimum Level

To change the color of `Protection III` or above, create a `protection.json` file and place it in `data/enchantment-text-styling/styling/enchantment` with the following data:

```json
{
  "enchantment": "minecraft:protection",
  "styles": [
    {
      "color": 16733525,
      "conditions": { "min": 3 }
    }
  ]
}
```

### Maximum Level

To change the color of `Protection II` or below, create a `protection.json` file and place it in `data/enchantment-text-styling/styling/enchantment` with the following data:

```json
{
  "enchantment": "minecraft:protection",
  "styles": [
    {
      "color": 16733525,
      "conditions": { "max": 2 }
    }
  ]
}
```

### Minimum and Maximum Level

To change the color of `Protection II, III` and `IV` to red if it is level 2 or above and level 4 or below, create a `protection.json` file and place it in `data/enchantment-text-styling/styling/enchantment` with the following data:

```json
{
  "enchantment": "minecraft:protection",
  "styles": [
    {
      "color": 16733525,
      "conditions": { 
        "min": 2,
        "max": 4 
      }
    }
  ]
}
```