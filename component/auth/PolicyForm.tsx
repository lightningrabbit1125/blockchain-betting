'use client'

import React from "react"

const PolicyForm: React.FC =({content})=> {

    return (
        <div className="policy-form flex gap-4 items-center">
            <input type="checkbox" />
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    )
}

export default PolicyForm;