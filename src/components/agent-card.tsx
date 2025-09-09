import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import type { Agent } from "@/lib/data";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/50">
          <AvatarImage src={agent.avatar} alt={agent.name} data-ai-hint="person photo" />
          <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold text-lg text-accent">{agent.name}</p>
          <div className="flex items-center gap-4 mt-1 text-muted-foreground">
            <a href={`tel:${agent.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>{agent.phone}</span>
            </a>
            <a href={`mailto:${agent.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
