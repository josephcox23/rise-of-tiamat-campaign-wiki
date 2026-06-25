---
type: boss-encounter
tags: [boss, tiamat, finale, interactive-mechanics]
---

# The Tiamat Encounter: Weakened Variant

> [!important] Encounter Rules
> Because the boys hold all **five original masks**, Tiamat's base statistics are broken. Instead of a single giant statblock block, her arrival is split into interactive phases to keep the kids engaged with puzzles and targets.

---

## Phase 1: The Replica Shatter
*Tiamat breaks through the portal partially, her Blue and White heads manifesting while the other three are unstable energy loops spinning around training replica masks floating above the altar pillars.*

### Tiamat (Phase 1 Form)
```statblock
name: Tiamat (Phase 1 - Blue & White)
size: Gargantuan
type: Fiend, Dragon, Chaotic Evil
ac: 20 (Cracked Scales)
hp: 180 (10d20 + 80)
speed: 0 ft. (Anchored in portal)
stats: [26, 10, 26, 26, 26, 26]
condition_immunities: blinded, charmed, deafened, frightened, poisoned
senses: Blindsight 60 ft., Passive Perception 18
languages: Draconic, Infernal
traits:
  - name: Unstable Forms
    desc: "Tiamat only has access to her Blue and White head attacks during this phase. She has no legendary resistances."
actions:
  - name: Multiattack
    desc: "Tiamat makes two head attacks: one Bite (Blue) and one Bite (White)."
  - name: Bite (Blue)
    desc: "Melee Weapon Attack: +14 to hit, reach 15 ft. Hit: 19 (2d10 + 8) piercing damage plus 5 (1d10) lightning damage."
  - name: Bite (White)
    desc: "Melee Weapon Attack: +14 to hit, reach 15 ft. Hit: 19 (2d10 + 8) piercing damage plus 5 (1d10) cold damage."
  - name: Dual Breath (Recharge 5-6)
    desc: "Tiamat breathes simultaneously. One half of the room takes a 60-ft line of Lightning (33 lightning damage, DC 18 Dex save half); the other half takes a 60-ft cone of Cold (33 cold damage, DC 18 Con save half)."
```
```statblock
name: Floating Training Replica Masks (5 Objects)
size: Small
type: Object (Floating)
ac: 14
hp: 25
stats: [10, 10, 10, 1, 1, 1]
damage_immunities: poison, psychic
traits:
  - name: Vulnerable Anchor
    desc: "When a player reduces a floating training mask to 0 hit points, its corresponding elemental head on Tiamat flashes and loses its reactions and breath weapon capabilities for 1 full round."

```

### Phase 2: The Portal Anchors
With the replicas shattered, Tiamat forces her torso further through the rift. Her Red and Green heads fully form, breathing fire and corrosive poison. Massive planar chains loop into heavy stone anchors protruding from the cave floor.

```statblock
name: Tiamat (Phase 2 - Red & Green)
size: Gargantuan
type: Fiend, Dragon, Chaotic Evil
ac: 21 (Cracked Scales)
hp: 220 (12d20 + 96)
speed: 0 ft.
stats: [26, 10, 26, 26, 26, 26]
traits:
  - name: Planar Bind
    desc: "While the two stone anchors remain intact, Tiamat cannot be moved or pushed, and she recovers 20 hit points at the start of her turn."
actions:
  - name: Multiattack
    desc: "Tiamat makes two attacks: one Bite (Red) and one Bite (Green)."
  - name: Bite (Red)
    desc: "Melee Weapon Attack: +14 to hit, reach 15 ft. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) fire damage."
  - name: Bite (Green)
    desc: "Melee Weapon Attack: +14 to hit, reach 15 ft. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) poison damage."
  - name: Fire/Poison Breath Combo (Recharge 5-6)
    desc: "Tiamat unleashes a combination of fire and poison in a 60-foot cone. Each creature must make a DC 19 Dexterity save against fire (27 damage) and a DC 19 Constitution save against poison (27 damage). Saves cut damage by half."

```
```statblock
name: Planar Stone Anchors (2 Objects)
size: Large
type: Object
ac: 17
hp: 40
damage_immunities: poison, psychic, piercing
traits:
  - name: Brittle Under Might
    desc: "If a player uses an Ancestral Weapon or a heavy weapon action to strike the anchor, it takes double damage from the hit. When an anchor breaks, Tiamat screams, instantly losing 40 hit points and gaining vulnerability to all spellcasting damage until the start of her next turn."

```

### Phase 3: The Five-Headed Banishment
Tiamat stands fully inside the ruined caldera caldera temple, her final Black head fully formed. She prepares a apocalyptic multi-breath weapon. The players must use their collected true Dragon Masks to finish her.

```statblock
name: Tiamat (Phase 3 - The Black Dawn)
size: Gargantuan
type: Fiend, Dragon, Chaotic Evil
ac: 19 (Exposed Core)
hp: 150 (8d20 + 64)
speed: 40 ft.
stats: [26, 10, 26, 26, 26, 26]
traits:
  - name: Final Surge
    desc: "Tiamat is desperate. She has disadvantage on all saving throws due to her unstable summoning form, but her attacks deal an extra 4 (1d7) force damage."
actions:
  - name: Bite (Black)
    desc: "Melee Weapon Attack: +14 to hit, reach 15 ft. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
  - name: Cataclysmic Breath (Recharge 6)
    desc: "Tiamat fires a combined beam from all five heads at a single target line. Deal 50 damage of mixed elemental types (DC 18 Dexterity save for half)."
  - name: Coordinated Mask Banishment (Special Reaction)
    desc: "When Tiamat is reduced to 0 hit points, if the boys hold up the five true Dragon Masks and channel their ancestral items together as a team reaction, the replica portal field collapses entirely, banishing her back to the Nine Hells instantly."

```
