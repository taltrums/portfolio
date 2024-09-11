import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const commentsFilePath = path.join(process.cwd(), 'data', 'comments.json')

// Ensure the comments file exists
if (!fs.existsSync(commentsFilePath)) {
  fs.writeFileSync(commentsFilePath, JSON.stringify([]), 'utf8');
}

interface Comment {
  slug: string;
  id: number;
  [key: string]: any;
}

function readComments(): Comment[] {
  if (!fs.existsSync(commentsFilePath)) {
    // If the file does not exist, return an empty array
    return [];
  }

  const fileData = fs.readFileSync(commentsFilePath, 'utf8');

  if (!fileData) {
    // If the file is empty, return an empty array
    return [];
  }

  try {
    return JSON.parse(fileData) as Comment[];
  } catch (error) {
    console.error("Failed to parse comments:", error);
    // Return an empty array or handle the error as needed
    return [];
  }
}

function saveComments(comments: { slug: string; id: number; [key: string]: any }[]) {
  fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  let comments = readComments()

  if (req.method === 'POST') {
    if (typeof slug !== 'string') {
      return res.status(400).json({ error: 'Slug is required' });
    }
    const newComment = { ...req.body, slug: slug, id: Date.now() }
    comments.push(newComment)
    saveComments(comments)
    return res.status(201).json(newComment)
  }

  if (req.method === 'GET') {
    const postComments = comments.filter((comment: Comment) => comment.slug === slug)
    return res.status(200).json(postComments)
  }

  res.status(405).end() // Method Not Allowed
}
