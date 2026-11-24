const fs = require('fs');
const path = require('path');

// Gunakan /tmp kalo jalan di Vercel biar ga error Read-Only File System
const isVercel = process.env.VERCEL === '1';
const DATA_FILE = isVercel
  ? path.join('/tmp', 'database-finpro.json')
  : path.join(__dirname, 'database-finpro.json');

// Inisialisasi file JSON jika belum ada
function initStorage(defaultData = []) {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
  }
}

// Baca semua data
function getAll(defaultData = []) {
  initStorage(defaultData);
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

// Tambah 1 data baru
function create(item) {
  const list = getAll();
  const newItem = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    ...item
  };
  list.push(newItem);
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf-8');
  return newItem;
}

// Update data berdasarkan ID
function update(id, updatedFields) {
  const list = getAll();
  const index = list.findIndex((item) => item.id === id);
  if (index === -1) return null;

  list[index] = { ...list[index], ...updatedFields, updatedAt: new Date().toISOString() };
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), 'utf-8');
  return list[index];
}

// Hapus data berdasarkan ID
function remove(id) {
  const list = getAll();
  const filtered = list.filter((item) => item.id !== id);
  if (filtered.length === list.length) return false;

  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
  return true;
}

module.exports = { getAll, create, update, remove };