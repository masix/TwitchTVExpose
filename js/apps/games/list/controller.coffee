define ["msgbus", "apps/games/list/views", "controller/_base", "backbone" ], (msgBus, Views, AppController, Backbone) ->
    class Controller extends AppController
        initialize: (options)->
            entities=msgBus.reqres.request "games:top:entities"
            @layout = @getLayoutView()

            @listenTo @layout, "show", =>
                @gameRegion entities

            @show @layout,
                loading:
                    entities: entities

        gameRegion: (collection)  ->
            view = @getGameView collection
            @listenTo view, "childview:game:item:clicked", (child, args) ->  # listen to events from itemview (we've overridden the eventnamePrefix to childview)
                console.log "game:item:clicked" , args.model
                Backbone.history.navigate "games/streaming/#{args.model.get("game").name}", trigger:false
                msgBus.commands.execute "app:stream:list", @layout.streamRegion, args.model

            @layout.gameRegion.show view

        getGameView: (collection) ->
            new Views.TopGameList
                collection: collection

        getLayoutView: ->
            new Views.Layout

        getHeroView: ->
            new Views.Hero

        showHeroView: ->
            @heroView = @getHeroView()
            @show @heroView, region: @layout.streamRegion