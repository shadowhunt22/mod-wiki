---
outline: deep
---

<div id="mod-header">

# Cloud Dash

<img src="./_assets/icon.png" width='75px' height='75px' draggable="false" class="mod-icon" />

</div>

## Information and Description

Add a dashing mechanic to the game! To be able to dash, you will need to find enchantment books in ancient cities and end cities chsts and apply the enchantment to your boots. The enchantment has a max level of II.

To use this mod, download the mod it and move it to your `.minecraft/mods` folder. Additionally, you will need to install this mod on your server for it to work properly. The Fabric API jar for this mod is also needed for the client and server.

## Features

- When you press `R` (or reassign the keybind to your liking) with your boots enchanted with the Dash enchantment, you can dash.
- You can do a double dash. In order for the dash to be reset, you need to touch the ground.
- The WASD keys dictate the direction you dash.

As mentioned above, the `Dash` enchantment can be found in ancient cities and end cities chests.

## Gamerules

- `noEnchantmentToDash`
    - `default`: false
    - `info`: when enabled, players do not need the dash enchantment on their boots in order to dash.

- `canInfiniteDash`
    - `default`: false
    - `info`: when enabled, players can have infinite dashs. Note: the cooldown will still apply once the player touches the ground.

## Config Options

While the gamerules can only be toggled by server admins/with cheats enabled on singleplayer worlds, there are also client-side config options which can be configuered by pressing `J` to open the screen:

- `doubleTapWithSpaceBar`
    - `default`: false
    - `info`: when enabled and if you double tap with your space bar, you can perform a dash in addition to pressing the keybind.

- `doubleTapWithHotKey`
    - `default`: false
    - `info`: when enabled and if you double tap with your hotkey, you can perform a dash. This means you cannot press the hotkey once to dash; you must double tap it. Both this option and the doubleTapWithSpaceBar can be enabled and work at the same time.

- `renderHudIndicator`
    - `default`: true
    - `info`: render the cloud HUD indicator when your dash is on cooldown.

## Versions

This mod is **Fabric** ONLY.  There is no plan to support Forge.

This mod is available for the following Minecraft versions:

<version>

`1.20` 
`1.20.1` 
`1.20.2` 
`1.20.3` 
`1.20.4` 
`1.20.5` 
`1.20.6`

</version>

## Client and Server Support

Client: **Required**

Server: **Required**