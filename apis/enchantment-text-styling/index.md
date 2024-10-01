---
outline: deep
---

# Enchantment Text Styling

## Information and Description

This API makes the customization of an enchantment's text style to be customizable through the use of data.  This can be applied to vanilla enchantments and modded enchantments alike!

## Versions

This API is **Fabric** ONLY, with support for the following versions:

<version>

`1.21` 
`1.21.1`

</version>

## Developing with the API

The only public, usable, API this "library" provides is a data generator to make the creation of a datapack for this mod easier.  To look how the data is formatted or learn how to manually create a datapack, see [Data Formats](/apis/enchantment-text-styling/data-formats.md).

To start developing with this API, add the following to your build.gradle:

```java
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    // see below for #versions of this API
    modImplementation 'com.github.shadowhunt22:enchantment-text-styling:{release_version}' 
}
```

## Usage

This guide assumes you already have Fabric's `DataGeneratorEntrypoint` registred in your `fabric.mod.json`.  To generate your own datapacks with the API,

```java
// ModDataGen.java
public class ModDataGen implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator generator) {
		FabricDataGenerator.Pack pack = generator.createPack();
		
        pack.addProvider(EnchantmentTextStylingData::new);
	}
}

// EnchantmentTextStylingData.java
public class EnchantmentTextStylingData extends EnchantmentTextStylingProvider {
	protected EnchantmentTextStylingData(FabricDataOutput dataOutput, CompletableFuture<RegistryWrapper.WrapperLookup> registriesFuture) {
		super(dataOutput, registriesFuture);
	}

	@Override
	public void generate(RegistryWrapper.WrapperLookup lookup) {
        // when adding an entry, it is important to finish by calling ".add()" 
        // otherwise, the entry will not be added to be generated.

		this.addEntry(Enchantments.PROTECTION)
            .color(Formatting.RED.getColorValue())
            .specificCondition(1)
            .add();

		this.addEntry(Enchantments.BLAST_PROTECTION)
            .color(Formatting.GREEN.getColorValue())
            .min(2)
            .max(3)
            .add();

		this.addEntry(Enchantments.PROJECTILE_PROTECTION)
            .color(Formatting.RED.getColorValue())
            .min(1)
            .max(2)
            .add();
    }
}
```

## Method Chaining

Here are details about each method you can use in the method chain:

### add(int value)

The color of the enchantment text.

`value` an integer from either calling `Formatting#getColorValue()` or supplying an RGB value converted to an integer.
Use a tool like [shodor.org](http://www.shodor.org/~efarrow/trunk/html/rgbint.html) to convert an RGB to an integer.

### specificCondition(int value)

`value` represents when the custom enchantment styling will be applied.  For example, if you supply a `2` to this method and the
level of the enchantment is `2`, then the `EnchantmentStyling#color` will be applied to the text of the
enchantment.

### min(int value)

`value` represents when the custom enchantment styling will be applied.  For example, if you supply a `1` to this method,
it will evaluate as follows:

```java
if (level >= 1) {
    // apply text styling
}
```

If, for example, a value of `2` is also supplied to `EnchantmentStyling.Builder#max(int)`, then it will
evaluate as follows:

```java
if (level >= 1 && level <= 2) {
    // apply text styling
}
```

### max(int value)

`value` represents when the custom enchantment styling will be applied.  For example, if you supply a `2` to this method,
it will evaluate as follows:

```java
if (level <= 2) {
    // apply text styling
}
```

If, for example, a value of `1` is also supplied to `EnchantmentStyling.Builder#min(int)`, then it will
evaluate as follows:

```java
if (level >= 1 && level <= 2) {
    // apply text styling
}
```

### add()

Required in order to generate the JSON file.