import "jspdf-autotable";
import { format } from "date-fns";
import jsPDF from "jspdf";

const generatePDF = (tickets) => {
  const doc = new jsPDF();

  //   const tableColumn = ["Date", "Category", "Description", "Unit Price", "Qty", "Line Total"];
  const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableRows = [];

  //Add data
  tickets.forEach((ticket) => {
    const ticketData = [ticket.id, ticket.title, ticket.request, ticket.status, format(new Date(ticket.updated_at), "dd-mm-yyyy")];
    tableRows.push(ticketData);
  });

  //create table
  doc.autoTable(tableColumn, tableRows, { startY: 20 });

  //file title
  const date = Date().split(" ");
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.text("Closed tickets within the last one month", 14, 15);

  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
