---
outline: deep
---

# Enchantment Text Styling Data Formats

## Enchantment

Enchantment files defines the styles that will be applied to an enchantment's text.  By default, this mod does not come with any datapacks, rather, it is up to the datapack or modpack creator, or the mod developer, to create these entires.  These files are loaded from `data/enchantment-text-color/styling/[namespace]/[enchantment_name].json`, and all objects must be in an array (see below for examples).

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
          A required object containing the styling information of an enchantment's text.
        </th>
        <th>Yes</th>
    </tr>
    <tr>
        <th>
          <code>conditions</code>
        </th>
        <th>An optional object containing the conditions in which the styling will be applied to the enchantment's text</th>
        <th>No</th>
    </tr>
</table>

## Styles

<table>
    <tr>
        <th>Field</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <th>
          <code>color</code>
        </th>
        <th>required</th>
        <th>An integer representing an RBG color.  Use a tool like <a href="http://www.shodor.org/~efarrow/trunk/html/rgbint.html" target="_about">shodor.org</a> to convert an RGB value to an integer.</th>
    </tr>
    <tr>
        <th>
          <code>bold</code>
        </th>
        <th>
          <code>false</code>
        </th>
        <th>Bold style</th>
    </tr>
    <tr>
        <th>
          <code>italic</code>
        </th>
        <th>
          <code>false</code>
        </th>
        <th>Italic style</th>
    </tr>
    <tr>
        <th>
          <code>underlined</code>
        </th>
        <th>
          <code>false</code>
        </th>
        <th>Underlined style</th>
    </tr>
    <tr>
        <th>
          <code>strikethrough</code>
        </th>
        <th>
          <code>false</code>
        </th>
        <th>Strikethrough style</th>
    </tr>
    <tr>
        <th>
          <code>obfuscated</code>
        </th>
        <th>
          <code>false</code>
        </th>
        <th>Obfuscated style</th>
    </tr>
</table>

## Conditions

<table>
    <tr>
        <th>Field</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <th>
          <code>value</code>
        </th>
        <th>
          <code>none</code>
        </th>
        <th>Apply styling to a specific enchantment level</th>
    </tr>
    <tr>
        <th>
          <code>min</code>
        </th>
        <th>
          <code>none</code>
        </th>
        <th>Apply styling to a minimum enchantment level</th>
    </tr>
    <tr>
        <th>
          <code>max</code>
        </th>
        <th>
          <code>none</code>
        </th>
        <th>Apply styling to a maximum enchantment level</th>
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

To change the color of Proection to red if its level is 2, create a `protection.json` file and place it in `data/enchantment-text-styling/minecraft` with the following data:

```json
[
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "value": 2
    }
  }
]
```

To add more conditions, add more objects to the array like so:

```json
[
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "value": 2
    }
  },
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "value": 3
    }
  }
]
```

### Minimum Level

To change the color of Proection to red if it is level 3 or above, create a `protection.json` file and place it in `data/enchantment-text-styling/minecraft` with the following data:

```json
[
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "min": 3
    }
  }
]
```

### Maximum Level

To change the color of Proection to red if it is level 2 or below, create a `protection.json` file and place it in `data/enchantment-text-styling/minecraft` with the following data:

```json
[
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "max": 3
    }
  }
]
```

### Minimum and Maximum Level

To change the color of Proection to red if it is level 2 or above and level 4 or below, create a `protection.json` file and place it in `data/enchantment-text-styling/minecraft` with the following data:

```json
[
  {
    "enchantment": "minecraft:protection",
    "color": 16733525,
    "conditions": {
      "min": 2,
      "max": 4
    }
  }
]
```