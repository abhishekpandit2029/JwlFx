export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  callingCode: string;
  role: "customer" | "admin" | "manager" | "designer";
  businessInfo: string;
  createdAt: string;
  status: "active" | "inactive";
};

export const clientsData: Client[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    phone: "(555) 123-4567",
    callingCode: "+1",
    role: "customer",
    businessInfo:
      "Luxury Jewelry Retailer, New York, Specializing in engagement rings",
    createdAt: "2024-01-15",
    status: "active",
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@jewels.com",
    phone: "(555) 234-5678",
    callingCode: "+1",
    role: "admin",
    businessInfo: "JewelFx Admin - Full system access",
    createdAt: "2023-12-01",
    status: "active",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@studio.com",
    phone: "(555) 345-6789",
    callingCode: "+1",
    role: "designer",
    businessInfo: "3D CAD Specialist, 5+ years experience in jewelry design",
    createdAt: "2024-01-20",
    status: "active",
  },
  {
    id: "4",
    firstName: "Emma",
    lastName: "Williams",
    email: "emma.williams@jewelfx.com",
    phone: "(555) 456-7890",
    callingCode: "+1",
    role: "manager",
    businessInfo: "Quality Control Manager - Oversees all project approvals",
    createdAt: "2023-11-15",
    status: "active",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Martinez",
    email: "david.martinez@boutique.com",
    phone: "(555) 567-8901",
    callingCode: "+1",
    role: "customer",
    businessInfo: "Boutique Jewelry Store, Los Angeles, Custom designs",
    createdAt: "2024-02-01",
    status: "active",
  },
  {
    id: "6",
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@design.com",
    phone: "(555) 678-9012",
    callingCode: "+44",
    role: "designer",
    businessInfo:
      "Rendering Specialist, London-based, Photoreal visualization expert",
    createdAt: "2024-01-10",
    status: "active",
  },
  {
    id: "7",
    firstName: "Robert",
    lastName: "Taylor",
    email: "robert.taylor@jewelfx.com",
    phone: "(555) 789-0123",
    callingCode: "+1",
    role: "manager",
    businessInfo: "Project Manager - Coordinates between designers and clients",
    createdAt: "2023-10-20",
    status: "active",
  },
  {
    id: "8",
    firstName: "Amanda",
    lastName: "White",
    email: "amanda.white@luxury.com",
    phone: "(555) 890-1234",
    callingCode: "+1",
    role: "customer",
    businessInfo:
      "High-end Jewelry Brand, Miami, Wedding and bridal collections",
    createdAt: "2024-01-25",
    status: "inactive",
  },
  {
    id: "9",
    firstName: "James",
    lastName: "Brown",
    email: "james.brown@studio.com",
    phone: "(555) 901-2345",
    callingCode: "+61",
    role: "designer",
    businessInfo:
      "Animation Specialist, Sydney, Creates product videos and reels",
    createdAt: "2024-02-05",
    status: "active",
  },
  {
    id: "10",
    firstName: "Sophie",
    lastName: "Garcia",
    email: "sophie.garcia@jewelfx.com",
    phone: "(555) 012-3456",
    callingCode: "+1",
    role: "admin",
    businessInfo:
      "System Administrator - Technical operations and user management",
    createdAt: "2023-09-15",
    status: "active",
  },
  {
    id: "11",
    firstName: "Daniel",
    lastName: "Lee",
    email: "daniel.lee@collection.com",
    phone: "(555) 123-7890",
    callingCode: "+82",
    role: "customer",
    businessInfo: "Korean Jewelry Designer, Seoul, Modern minimalist designs",
    createdAt: "2024-01-18",
    status: "active",
  },
  {
    id: "12",
    firstName: "Rachel",
    lastName: "Kim",
    email: "rachel.kim@design.com",
    phone: "(555) 234-8901",
    callingCode: "+1",
    role: "designer",
    businessInfo:
      "CAD Designer, San Francisco, Specializes in intricate patterns",
    createdAt: "2024-02-10",
    status: "active",
  },
];
