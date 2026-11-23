import { contentList } from "@/lib/generator/content";
import {
  createRng,
  float,
  fullName,
  id,
  imageUrl,
  int,
  isoDate,
  isoDateFuture,
  moneyAmount,
  pick,
  place,
  postalCode,
  slugify,
  streetAddress,
  takeFields,
} from "@/lib/generator/helpers";
import type { GeneratorTopic } from "@/lib/generator/types";
import {
  ShoppingBag,
  Package,
  Star,
  Tags,
  ShoppingCart,
  TicketPercent,
  CreditCard,
  Truck,
  FileSpreadsheet,
  BadgeCheck,
} from "lucide-react";

const ORDER_STATUSES = {
  en: ["pending", "processing", "shipped", "delivered", "cancelled"] as const,
};
const PAYMENT_STATUSES = {
  en: ["paid", "pending", "failed", "refunded"] as const,
};
const PAYMENT_METHODS = {
  en: ["card", "paypal", "bank_transfer", "cash", "wallet"] as const,
};
const CARRIERS = ["DHL", "FedEx", "UPS", "USPS", "Poste"] as const;
const COUPON_TYPES = ["percent", "fixed"] as const;
const SHIP_STATUSES = {
  en: ["label_created", "in_transit", "out_for_delivery", "delivered"] as const,
};

export const ecommerceTopics: GeneratorTopic[] = [
  {
    id: "products",
    category: "ecommerce",
    icon: ShoppingBag,
    fields: [
      { id: "name", default: true },
      { id: "price", default: true },
      { id: "image", default: true },
      { id: "category", default: true },
      { id: "id", default: false },
      { id: "description", default: false },
      { id: "brand", default: false },
      { id: "stock", default: false },
      { id: "rating", default: false },
      { id: "currency", default: false },
      { id: "sku", default: false },
      { id: "discount", default: false },
      { id: "colors", default: false },
      { id: "createdAt", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const name = pick(rng, contentList("productNames"));
      const colors =
        ["black", "white", "blue", "silver"];
      const record: Record<string, unknown> = {
        id: id("prd", ctx.index, rng),
        name,
        price: moneyAmount(rng, "en", {
          en: [10, 499],
        }),
        currency: ctx.pack.currency,
        image: imageUrl(`prd-${ctx.seed}-${ctx.index}`),
        category: pick(rng, contentList("productCategories")),
        description:
          `A quality ${name.toLowerCase()} for everyday use.`,
        brand: pick(rng, ctx.pack.companies),
        stock: int(rng, 0, 250),
        rating: float(rng, 3.2, 5, 1),
        sku: `SKU-${int(rng, 10000, 99999)}`,
        discount: int(rng, 0, 30),
        colors: [pick(rng, colors), pick(rng, colors)],
        createdAt: isoDate(rng, 300),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "orders",
    category: "ecommerce",
    icon: Package,
    fields: [
      { id: "id", default: true },
      { id: "customer", default: true },
      { id: "items", default: true },
      { id: "total", default: true },
      { id: "status", default: true },
      { id: "orderDate", default: false },
      { id: "paymentStatus", default: false },
      { id: "shippingAddress", default: false },
      { id: "currency", default: false },
      { id: "country", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const itemCount = int(rng, 1, 5);
        const names = contentList("productNames");
      const items = Array.from({ length: itemCount }, () => {
        const price = moneyAmount(rng, "en", {
          en: [8, 120],
        });
        const qty = int(rng, 1, 3);
        return {
          name: pick(rng, names),
          quantity: qty,
          price,
          total: price * qty,
        };
      });
      const total = items.reduce((s, it) => s + it.total, 0);
      const loc = place(ctx.pack, rng);
      const street = streetAddress(ctx.pack, rng);
      const postal = postalCode(ctx.pack, rng);
      const shippingAddress =
        `${street}, ${loc.city}, ${loc.region}, ${ctx.pack.countryName}, ${postal}`;
      const record: Record<string, unknown> = {
        id:
          false
            ? String(10000 + ctx.index + int(rng, 0, 900))
            : `ORD-${10000 + ctx.index + int(rng, 0, 50)}`,
        customer: fullName(ctx.pack, rng),
        items,
        total,
        currency: ctx.pack.currency,
        status: pick(rng, ORDER_STATUSES["en"]),
        orderDate: isoDate(rng, 180),
        paymentStatus: pick(rng, PAYMENT_STATUSES["en"]),
        shippingAddress,
        country: ctx.pack.countryName,
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "reviews",
    category: "ecommerce",
    icon: Star,
    fields: [
      { id: "user", default: true },
      { id: "rating", default: true },
      { id: "comment", default: true },
      { id: "date", default: true },
      { id: "id", default: false },
      { id: "product", default: false },
      { id: "title", default: false },
      { id: "verified", default: false },
      { id: "helpful", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const titles =
        [
              "Great product",
              "Worth it",
              "Almost perfect",
              "Highly recommend",
              "Good value",
            ];
      const record: Record<string, unknown> = {
        id: id("rev", ctx.index, rng),
        user: fullName(ctx.pack, rng),
        rating: int(rng, 1, 5),
        comment: pick(rng, contentList("reviewComments")),
        date: isoDate(rng, 200),
        product: pick(rng, contentList("productNames")),
        title: pick(rng, titles),
        verified: rng() > 0.35,
        helpful: int(rng, 0, 80),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "categories",
    category: "ecommerce",
    icon: Tags,
    fields: [
      { id: "name", default: true },
      { id: "slug", default: true },
      { id: "id", default: false },
      { id: "description", default: false },
      { id: "image", default: false },
      { id: "parentCategory", default: false },
      { id: "productCount", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const name = pick(rng, contentList("productCategories"));
      const parents =
        ["Shop", "Catalog", "Featured", null];
      const record: Record<string, unknown> = {
        id: id("cat", ctx.index, rng),
        name,
        slug: slugify(name) || `cat-${ctx.index}`,
        description:
          `Browse ${name.toLowerCase()} products.`,
        image: imageUrl(`cat-${ctx.index}`, 400, 300),
        parentCategory: pick(rng, parents),
        productCount: int(rng, 4, 220),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "cart-items",
    category: "ecommerce",
    icon: ShoppingCart,
    fields: [
      { id: "product", default: true },
      { id: "quantity", default: true },
      { id: "price", default: true },
      { id: "total", default: true },
      { id: "image", default: true },
      { id: "id", default: false },
      { id: "discount", default: false },
      { id: "sku", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const price = moneyAmount(rng, "en", {
        en: [5, 150],
      });
      const quantity = int(rng, 1, 4);
      const discount = moneyAmount(rng, "en", {
        en: [0, 15],
      });
      const total = Math.max(0, price * quantity - discount);
      const record: Record<string, unknown> = {
        id: id("crt", ctx.index, rng),
        product: pick(rng, contentList("productNames")),
        quantity,
        price,
        total,
        discount,
        image: imageUrl(`crt-${ctx.seed}-${ctx.index}`, 200, 200),
        sku: `SKU-${int(rng, 10000, 99999)}`,
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "coupons",
    category: "ecommerce",
    icon: TicketPercent,
    fields: [
      { id: "code", default: true },
      { id: "discount", default: true },
      { id: "type", default: true },
      { id: "expiresAt", default: true },
      { id: "id", default: false },
      { id: "minimumOrder", default: false },
      { id: "usageLimit", default: false },
      { id: "active", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const type = pick(rng, COUPON_TYPES);
      const codes = ["SAVE10", "WELCOME", "SPRING25", "FLASH15", "VIP20"];
      const record: Record<string, unknown> = {
        id: id("cpn", ctx.index, rng),
        code: `${pick(rng, codes)}${int(rng, 1, 99)}`,
        discount:
          type === "percent"
            ? int(rng, 5, 40)
            : moneyAmount(rng, "en", {
                en: [5, 50],
              }),
        type,
        expiresAt: isoDateFuture(rng, 180),
        minimumOrder: moneyAmount(rng, "en", {
          en: [20, 100],
        }),
        usageLimit: int(rng, 50, 5000),
        active: rng() > 0.2,
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "payments",
    category: "ecommerce",
    icon: CreditCard,
    fields: [
      { id: "amount", default: true },
      { id: "currency", default: true },
      { id: "status", default: true },
      { id: "paymentMethod", default: true },
      { id: "id", default: false },
      { id: "transactionId", default: false },
      { id: "date", default: false },
      { id: "customer", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const record: Record<string, unknown> = {
        id: id("pay", ctx.index, rng),
        amount: moneyAmount(rng, "en", {
          en: [12, 899],
        }),
        currency: ctx.pack.currency,
        status: pick(rng, PAYMENT_STATUSES["en"]),
        paymentMethod: pick(rng, PAYMENT_METHODS["en"]),
        transactionId: `txn_${int(rng, 100000, 999999)}`,
        date: isoDate(rng, 120),
        customer: fullName(ctx.pack, rng),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "shipments",
    category: "ecommerce",
    icon: Truck,
    fields: [
      { id: "order", default: true },
      { id: "carrier", default: true },
      { id: "status", default: true },
      { id: "trackingNumber", default: true },
      { id: "id", default: false },
      { id: "estimatedDelivery", default: false },
      { id: "country", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const carrier = pick(rng, CARRIERS);
      const record: Record<string, unknown> = {
        id: id("shp", ctx.index, rng),
        order: `ORD-${10000 + ctx.index}`,
        carrier,
        status: pick(rng, SHIP_STATUSES["en"]),
        trackingNumber: `${carrier.slice(0, 3).toUpperCase()}${int(rng, 1e9, 2e9)}`,
        estimatedDelivery: isoDateFuture(rng, 14),
        country: ctx.pack.countryName,
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "invoices",
    category: "ecommerce",
    icon: FileSpreadsheet,
    fields: [
      { id: "invoiceNumber", default: true },
      { id: "customer", default: true },
      { id: "amount", default: true },
      { id: "status", default: true },
      { id: "id", default: false },
      { id: "issueDate", default: false },
      { id: "dueDate", default: false },
      { id: "currency", default: false },
      { id: "tax", default: false },
      { id: "itemsCount", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const statuses =
        ["paid", "pending", "overdue", "draft"];
      const amount = moneyAmount(rng, "en", {
        en: [40, 2400],
      });
      const tax = Math.round(amount * 0.09);
      const record: Record<string, unknown> = {
        id: id("inv", ctx.index, rng),
        invoiceNumber:
          `INV-${10000 + ctx.index + int(rng, 0, 200)}`,
        customer: fullName(ctx.pack, rng),
        amount,
        status: pick(rng, statuses),
        issueDate: isoDate(rng, 90),
        dueDate: isoDateFuture(rng, 45),
        currency: ctx.pack.currency,
        tax,
        itemsCount: int(rng, 1, 12),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "brands",
    category: "ecommerce",
    icon: BadgeCheck,
    fields: [
      { id: "name", default: true },
      { id: "logo", default: true },
      { id: "slug", default: true },
      { id: "country", default: true },
      { id: "id", default: false },
      { id: "description", default: false },
      { id: "website", default: false },
      { id: "productCount", default: false },
      { id: "founded", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const name = pick(rng, ctx.pack.companies);
      const record: Record<string, unknown> = {
        id: id("brn", ctx.index, rng),
        name,
        logo: imageUrl(`brn-${ctx.seed}-${ctx.index}`, 200, 200),
        slug: slugify(name) || `brand-${ctx.index + 1}`,
        country: ctx.pack.countryName,
        description:
          `${name} â€” consumer products and retail brand.`,
        website:
          `https://example.com/brands/${ctx.index + 1}`,
        productCount: int(rng, 8, 420),
        founded: int(rng, 1960, 2020),
      };
      return takeFields(record, fields);
    },
  },
];
