export const hardcodeRules = {
    "Compendium.pf2e.feats-srd.Item.5CRt5Dy9eLv5LpRF": {
        check: (item) => {
            return true;
        },
        deleteOldRules: false,
        newrules: [
            {
                "key": "CraftingOption",
                "desc": "Craft with Nature instead of Crafting.",
                "predicate": [
                    {
                        "or": [
                            "crafting:heroic:item:tag:herbal",
                            {
                                "and": [
                                    "crafting:heroic:item:trait:alchemical",
                                    "crafting:heroic:item:trait:healing"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "key": "ModifyCraftAProject",
                "target": "skill",
                "mode": "override",
                "amount": "nature",
                "toggledBy": "herbalist-dedication"
            }
        ]
    },
    "Compendium.pf2e.feats-srd.Item.PiUe3tpv7UVtnfvS": {
        check: (item) => {
            return (item.rules[0].selector[0] === "crafting" &&
                item.system.prerequisites.value.find(
                    i => i.value === "Hyperfocus"
                ).value === "Hyperfocus")
        },
        deleteOldRules: true,
        newrules: [
            {
                "adjustment": {
                    "success": "one-degree-better"
                },
                "key": "AdjustDegreeOfSuccess",
                "selector": "skill-check",
                "predicate": [
                    "action:craftproj",
                    "crafting:heroic:settings:impeccable-crafting"
                ]
            },
            {
                "key": "CraftingOption",
                "desc": "Upgrade success to critical success on specialty crafting. Check manually if applies!"
            },
            {
                "key": "Note",
                "predicate": [
                    "action:craftproj",
                    "crafting:heroic:settings:impeccable-crafting"
                ],
                "selector": "skill-check",
                "title": "{item|name}",
                "text": "Whenever you roll a success at a Crafting check to make an item of the type you chose with Specialty Crafting, you get a critical success instead."
            }
        ]
    },
    "Item.J1yQte0LiN0zzbv8": {
        check: (item) => {
            return (item.rules[0].selector[0] === "crafting")
        },
        deleteOldRules: true,
        newrules: [
            {
                "key": "RollTwice",
                "selector": "skill-check",
                "keep": "higher",
                "removeAfterRoll": "true",
                "predicate": [
                    "action:craftproj",
                    "exploration"
                ]
            }
        ]
    }
}