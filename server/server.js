import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import cors from 'cors'

// Import routers
import locationsRouter from './routes/locations.js';
import eventsRouter from './routes/events.js';


dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors())

app.use(express.json());

// Favicon setup
if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')));
} else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')));
    app.use(express.static('public'));
}

// API routes
app.use('/api/locations', locationsRouter);
app.use('/api/events', eventsRouter);

// Catch-all for React routing in production
if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    );
}

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
