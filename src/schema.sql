-- Users table
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Slots table
CREATE TABLE slots(
  id SERIAL PRIMARY KEY,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  is_booked BOOLEAN DEFAULT FALSE
);

-- Bookings table
CREATE TABLE bookings(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  slots_id INTEGER REFERENCES slots(id),
  status VARCHAR(20) DEFAULT 'booked',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- & "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -d appointments 