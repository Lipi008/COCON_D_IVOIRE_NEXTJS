"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface DropdownMenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  className?: string
}

export const DropdownMenuCustom = ({ trigger, children, align = "left", className = "" }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 mt-2 ${
              align === "right" ? "right-0" : "left-0"
            } bg-white rounded-md shadow-lg py-1 min-w-[200px]`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const DropdownMenuItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <div
      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export const DropdownMenuSeparator = () => {
  return <div className="border-t border-gray-200 my-1"></div>
}

export const DropdownMenuSubTrigger = ({
  children,
  icon = <ChevronRight size={16} />,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
      <span>{children}</span>
      {icon}
    </div>
  )
}
