import Image from "next/image"

export const metadata = {
    title: 'Status',
}

export default function Status() {
    return (
      <main>
        <div>
            <h1>Status</h1>
        </div>
        <div>
            <Image src="/status-foto" alt=""></Image>
        </div>
      </main>
    )
  }