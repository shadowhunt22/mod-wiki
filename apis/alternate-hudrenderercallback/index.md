---
outline: deep
---

# Alternate HudRendererCallback

## Information and Description

This API is an alternate implementation of Fabric API's (FAPI) HudRendererCallback. FAPI injects HudRendererCallback after Minecraft draws the chat hud. This leads to anything you draw with HudRendererCallback getting clipped by the chat hud. To remedy this problem, I have modified Fabric's implementation.

## Developing with the API

To start developing with this API, add the following to your build.gradle:

```java
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    // see below for #versions of this API
    modImplementation 'com.github.shadowhunt22:alternate-hudrenderercallback:{release_version}' 
}
```

## Usage

The API is used as follows:

```java
// this API is exactly like FAPI's HudRendererCallback when implementing it in your code.  
// the only difference is where the renderer is being executed.

// ClientModInitializer class
public class ExampleClient implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		AlternateHudRendererCallback.EVENT.register(new HudRenderer());
	}
}

// HudRenderer.java
public class HudRenderer implements AlternateHudRendererCallback {
    @Override
    public void onHudRender(DrawContext drawContext, float tickDelta) {
        // code
    }
}
```

## Versions

This API is **Fabric** ONLY.

<details>
<summary>1.20</summary>

- API version: <api-version> 1.20.x-0.1.3 </api-version>

</details>

<details>
<summary>1.20.1</summary>

- API version: <api-version> 1.20.x-0.1.3 </api-version>

</details>

<details>
<summary>1.20.2</summary>

- API version: <api-version> 1.20.x-0.1.3 </api-version>

</details>

<details>
<summary>1.20.3</summary>

- API version: <api-version> 1.20.x-0.1.3 </api-version>

</details>

<details>
<summary>1.20.4</summary>

- API version: <api-version> 1.20.x-0.1.3 </api-version>

</details>

> [!NOTE]
> Although versions are provided for this API above, they may not be the newest version.