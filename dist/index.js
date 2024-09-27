/*!
 * js-subclub v1.0.0
 * (c) TheBLVD
 * Released under the MIT License.
 */

'use strict';

require('node-fetch');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class Client {
    constructor(apiKey) {
        this.apiUrl = 'https://api.sub.club/public';
        this.apiKey = apiKey;
    }
    // creates a new post on sub.club with the given parameters.
    createPost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.apiUrl}/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify(params),
            });
            if (!response.ok) {
                throw new Error(`Failed to create post: ${response.statusText}`);
            }
            return response.json();
        });
    }
    // edits the given post with the supplied PostUpdateParams.
    editPost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.apiUrl}/post/edit`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify(params),
            });
            if (!response.ok) {
                throw new Error(`Failed to edit post: ${response.statusText}`);
            }
            return response.json();
        });
    }
    // deletes a post with the given postID.
    deletePost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.apiUrl}/post/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify(params),
            });
            if (!response.ok) {
                throw new Error(`Failed to delete post: ${response.statusText}`);
            }
            return;
        });
    }
}

exports.SubClient = Client;
//# sourceMappingURL=index.js.map
