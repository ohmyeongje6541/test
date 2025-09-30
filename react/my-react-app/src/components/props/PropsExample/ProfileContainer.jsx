import React from 'react'
import Profile from './Profile'

export default function ProfileContainer() {
  const name = "현우"
  const age = 22
  const isAdmin = true
  return (< Profile name={name} age={age} isAdmin={isAdmin} />);
}
