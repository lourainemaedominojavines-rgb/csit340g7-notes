import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      
      {isExpanded && (
        <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
          {body}
        </p>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded(prev => !prev)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {/* Toggles button text between Show more and Show less[cite: 7] */}
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  )
}
 
export default NoteCard