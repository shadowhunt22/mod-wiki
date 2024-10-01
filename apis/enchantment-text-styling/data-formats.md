---
outline: deep
---

# Enchantment Text Styling Data Formats

## Explanation

Enchantment Text Styling looks for JSON files in the `data/enchantment-text-color/styling/[namespace]/[enchantment-name].json` directories, where 

`[namespace]` is a namespace (such as `minecraft` or `modid`)

`[enchantment-name]` is the path id of the enchantment (such as `protection` or `binding_curse`).

The objects stored in these files must be in an array (see [Examples](#examples)).

<table>
    <tr>
        <th>Field</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <th>enchantment</th>
        <th>A string for the identifier of an enchantment to apply styling to.</th>
        <th>Yes</th>
    </tr>
    <tr>
        <th>color</th>
        <th>
          An integer representing an RBG color.  Use a tool like <a href="http://www.shodor.org/~efarrow/trunk/html/rgbint.html" target="_about">shodor.org</a> to convert an value RGB to an integer.
        </th>
        <th>Yes</th>
    </tr>
    <tr>
        <th>conditions</th>
        <th>An optional object with the following integer fields: "value," "min," "max"</th>
        <th>No</th>
    </tr>
</table>

## Examples

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