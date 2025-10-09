export interface TicketModel {
    id?: string;
    title: string;
    description: string;
    status: 'open' | 'closed';
}