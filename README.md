# 🍽️ MealRoute

> A real-time food delivery and live route tracking platform built using a scalable microservices architecture.

MealRoute is a full-stack food delivery platform designed to explore how modern delivery applications work internally. The platform connects customers, restaurants, delivery partners, and administrators through role-based interfaces and independent backend services.

The project focuses on real-world engineering concepts such as microservices architecture, event-driven communication, real-time order updates, live rider location tracking, online payments, containerization, and cloud deployment.

---

## 🚧 Project Status

> **Currently under active development.**

MealRoute is being built incrementally as a learn-while-building project. Features listed as planned are part of the intended final architecture and may not yet be implemented.

---

## 🎯 Project Vision

Modern food delivery platforms involve much more than simply placing an order. They coordinate multiple independent actors and systems:

- Customers searching for food
- Restaurants managing menus and incoming orders
- Delivery partners accepting and delivering orders
- Administrators verifying and managing platform participants
- Payment systems processing transactions
- Real-time systems synchronizing order updates
- Location systems tracking active deliveries
- Distributed services communicating asynchronously

MealRoute aims to model these workflows through a modular and scalable architecture.

---

## 👥 Platform Roles

### 👤 Customer

Customers will be able to:

- Register and log in
- Browse restaurants
- Explore food items
- Add items to cart
- Manage delivery addresses
- Place orders
- Make online payments
- Receive real-time order status updates
- Track delivery partners live on a map

### 🏪 Restaurant / Seller

Restaurants will be able to:

- Manage restaurant information
- Manage food items
- Receive incoming orders
- View real-time order notifications
- Update order status
- Coordinate order preparation and handoff

### 🛵 Delivery Partner / Rider

Delivery partners will be able to:

- Access a dedicated rider interface
- View delivery opportunities
- Accept deliveries
- Navigate toward pickup and delivery locations
- Share live location during active deliveries
- Update delivery progress

### 🛡️ Admin

Administrators will be able to:

- Access a dedicated admin dashboard
- Verify platform participants
- Manage restaurants
- Manage delivery partners
- Support platform-level monitoring and management

---

## 🏗️ Architecture

MealRoute is designed around a microservices architecture.

Instead of placing all backend functionality inside one large server, the backend is divided into independent services with separate responsibilities.

### Planned Backend Services

#### 🔐 Auth Service

Responsible for:

- User registration
- Login
- Authentication
- Authorization
- Role-based access control
- Protected routes

#### 🍽️ Restaurant Service

Responsible for:

- Restaurant data
- Restaurant profiles
- Food items
- Menu management
- Restaurant-side order workflows

#### 🛵 Rider Service

Responsible for:

- Delivery partner data
- Rider workflows
- Delivery acceptance
- Delivery progress
- Rider-related operations

#### 🛡️ Admin Service

Responsible for:

- Verification workflows
- Administrative operations
- Restaurant management
- Rider management

#### ⚡ Realtime Service

Powered by Socket.IO.

Responsible for:

- Real-time order updates
- Restaurant order notifications
- Rider updates
- Live location events
- Customer tracking events

#### 🧰 Utils Service

Responsible for shared utility workflows such as:

- File uploads
- Media handling
- Payment-related operations
- Shared supporting functionality

---

## 🔄 High-Level System Flow

```text
                        ┌──────────────────────┐
                        │      Customer        │
                        │   Web Application    │
                        └──────────┬───────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │   React Frontend     │
                        └──────────┬───────────┘
                                   │
                    HTTP / REST API Requests
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
         ▼                         ▼                         ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Auth Service   │      │Restaurant Service│     │  Rider Service  │
└─────────────────┘      └─────────────────┘      └─────────────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │      RabbitMQ        │
                        │   Message Broker     │
                        └──────────┬───────────┘
                                   │
                                   ▼
                        ┌──────────────────────┐
                        │  Realtime Service    │
                        │     Socket.IO        │
                        └──────────┬───────────┘
                                   │
                                   ▼
                        Live Updates & Tracking
