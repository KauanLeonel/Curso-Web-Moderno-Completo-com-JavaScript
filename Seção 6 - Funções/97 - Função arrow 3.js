    let compareThis = function (param){
        console.log(this === param)
    }

    compareThis(global)

    const obj = {}
    compareThis = compareThis.bind(obj)
    compareThis(global)
    compareThis(obj)

    let comparaThisArrow = param => console.log(this === global
    )
    comparaThisArrow(global)
    comparaThisArrow(this)

    comparaThisArrow = comparaThisArrow.bind(obj)
    comparaThisArrow(obj) //Arrow function é mais forte    