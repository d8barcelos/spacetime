import { getUser } from '../lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarURL } = getUser()
  const url = avatarURL ? String(avatarURL) : ''
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        width={40}
        height={40}
        alt=""
        src={url}
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">{name}</p>
      <a
        href="/api/auth/logout"
        className="block text-red-400 hover:text-red-300"
      >
        Quero sair
      </a>
    </div>
  )
}
