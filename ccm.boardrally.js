"use strict";

/**
 * @overview ccmjs component for a rally board game.
 * @author André Kless <andre.kless@web.de> 2024-2025
 * @license The MIT License (MIT)
 */

ccm.files["ccm.boardrally.js"] = {
  name: "boardrally",
  ccm: "././libs/ccm/ccm.js",
  config: {
    "boards": ["ccm.load", {"type": "module", "url": "././resources/resources.js#boards"}],
    "css": ["ccm.load", "././resources/styles.css"],
    "data": {"store": ["ccm.store"]},
    /*
    "lang": ["ccm.start", "././libs/lang/ccm.lang.js", {
      "translations": {
        "de": ["ccm.load", {"url": "././resources/resources.js#de", "type": "module"}],
        "en": ["ccm.load", {"url": "././resources/resources.js#en", "type": "module"}],
      }
    }],
     */
    "helper": ["ccm.load", {"url": "././libs/ccm/helper.js", "type": "module"}],
    "html": ["ccm.load", "././resources/templates.html"],
    "path": "././resources/images/",
    "size": 71,
    "text": ["ccm.load", {"url": "././resources/resources.js#de", "type": "module"}],
  },
  Instance: function () {

    /**
     * shortcut to help functions
     * @type {Object.<string,Function>}
     */
    let $;

    /**
     * app state
     * @type {game_state}
     */
    let game;

    /**
     * When the instance is created, when all dependencies have been resolved and before the dependent sub-instances are initialized and ready.
     * @returns {Promise<void>}
     */
    this.init = async () => {

    };

    /**
     * When all dependencies are solved after creation and before the app starts.
     * @returns {Promise<void>}
     */
    this.ready = async () => {

      // Set shortcut to help functions
      $ = Object.assign({}, this.ccm.helper, this.helper);
      $.use(this.ccm);

    };

    /**
     * starts the app
     * @returns {Promise<void>}
     */
    this.start = async () => {

      // load app state
      game = await $.dataset(this.data);

      // no board? => choose board
      if (!game.board) return this.render.chooseBoard();

    };

    /**
     * contains all render functions
     * @type {Object.<string,Function>}
     */
    this.render = {

      /** lets the user choose a board */
      chooseBoard: () => {

        // renders HTML template for selecting boards
        $.setContent(this.element, $.html(this.html.choose_racetrack));

        // select the created webpage area for the boards
        const div_boards = this.element.querySelector("#boards");

        // render each board in that webpage area
        this.boards.forEach(({name, fields}, i) => {

          // create a webpage area for the current board
          const div_board = $.html(this.html.board, {
            name,
            width: fields[0].length,
            height: fields.length,
            size: this.size / 2
          });

          // append that webpage area to the webpage area that contains all boards
          $.append(div_boards, div_board);

          // render each field of the current board
          for (let i = 0; i < fields.length; i++) {
            for (let j = 0; j < fields[i].length; j++) {
              $.append(div_board, $.html(this.html.field, {
                path: this.path,
                id: fields[i][j].id
              }));
            }
          }

          // set the click event for the current board
          div_board.querySelector(".board").addEventListener('click', () => this.events.onSelectedBoard(i + 1));
        });

        /*
        this.racetracks.forEach((racetrack, i) =>
            render.objects(this.element.querySelectorAll('.board')[i], racetrack.objects, racetrack.board[0].length)
        );
         */
      }

    };

    /**
     * contains all event handlers
     * @type {Object.<string,Function>}
     */
    this.events = {

      /**
       * when a racetrack has been selected
       * @param {number} nr - racetrack number
       * @returns {Promise<void>}
       */
      onSelectedRacetrack: async nr => {
        console.log(nr);
        return;
        Object.assign(game, {
          racetrack: nr,
          objects: $.clone(this.racetracks[nr - 1].objects)
        });
        helper.findFields(nr, 'POWER').forEach(field => game.objects.push({
          type: "ECUBE",
          x: field.x,
          y: field.y,
          width: this.size / 5,
          height: this.size / 5
        }));
        await helper.save();
        console.log('Die ' + nr + '. Rennstrecke wurde ausgewählt.');
        await play();
      },

      /**
       * when a game figure has been selected
       * @param {string} figure_id - ID of the selected game figure
       * @returns {Promise<void>}
       */
      onSelectedFigure: async figure_id => {
        const figure = figure_id;
        if (!game.master) game.master = figure;
        const player = game.robots[figure] = {deck: [], energy: 5};
        for (const id in this.cards)
          for (let i = 0; i < this.cards[id].amount; i++)
            player.deck.push(this.cards[id].id);
        $.shuffleArray(player.deck);
        await helper.save();
        console.log(helper.getRobotName() + ' wurde als Roboter ausgewählt.');
        await play();
      }

    };
  }
};

/**
 * @typedef game_board
 * @description JSON representation of a game board.
 * @property {string} name
 * @property {string[][]} fields
 * @property {game_object[]} objects
 * @property {number} direction
 */

/**
 * @typedef game_object
 * @description Object on the game board.
 * @property {string} type
 * @property {number} x
 * @property {number} y
 * @property {number} direction
 * @property {number[]} range
 */

/**
 * @typedef game_state
 * @description App state of the board game.
 * @property {game_board} board
 */
