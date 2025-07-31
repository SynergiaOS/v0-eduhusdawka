import type { Metadata } from "next"
import SMSQueueStats from "@/components/sms-queue-stats"

export const metadata: Metadata = {
  title: "Panel administracyjny SMS | EduHustawka",
  description: "Panel administracyjny do zarządzania kolejką SMS",
}

export default function SMSAdminPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Panel administracyjny SMS</h1>
      <SMSQueueStats />
    </div>
  )
}
